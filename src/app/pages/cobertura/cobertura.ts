import { Component, OnInit, signal } from '@angular/core';

type CoverageArea = Readonly<{
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}>;

type MapPath = Readonly<{
  d: string;
  highlighted: boolean;
}>;

type MapMarker = Readonly<{
  name: string;
  x: number;
  y: number;
}>;

type GeoJSONPosition = readonly [number, number];

type GeoJSONGeometry = Readonly<{
  type: string;
  coordinates: unknown;
}>;

type GeoJSONFeature = Readonly<{
  properties?: Record<string, unknown>;
  geometry?: GeoJSONGeometry | null;
}>;

type GeoJSONFeatureCollection = Readonly<{
  features: ReadonlyArray<GeoJSONFeature>;
}>;

@Component({
  selector: 'app-cobertura',
  imports: [],
  templateUrl: './cobertura.html',
  styleUrl: './cobertura.scss',
})
export class Cobertura implements OnInit {
  private readonly mapWidth = 1000;
  private readonly mapHeight = 720;
  private readonly mapPadding = 28;
  private readonly mexicoGeoJsonUrl = 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/mexico.geojson';

  readonly coverageAreas: ReadonlyArray<CoverageArea> = [
    { name: 'Ciudad de México', state: 'Distrito Federal', latitude: 19.4326, longitude: -99.1332 },
    { name: 'Estado de México', state: 'México', latitude: 19.2826, longitude: -99.6577 },
    { name: 'Querétaro', state: 'Querétaro', latitude: 20.5888, longitude: -100.3899 },
    { name: 'Puebla', state: 'Puebla', latitude: 19.0414, longitude: -98.2063 },
    { name: 'Guadalajara', state: 'Jalisco', latitude: 20.6597, longitude: -103.3496 },
    { name: 'Monterrey', state: 'Nuevo León', latitude: 25.6866, longitude: -100.3161 },
    { name: 'Toluca', state: 'Estado de México', latitude: 19.2826, longitude: -99.6577 },
    { name: 'Cuernavaca', state: 'Morelos', latitude: 18.9242, longitude: -99.2216 },
  ];

  readonly mapPaths = signal<ReadonlyArray<MapPath>>([]);
  readonly mapMarkers = signal<ReadonlyArray<MapMarker>>([]);
  readonly isLoadingMap = signal(true);
  readonly mapError = signal('');

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch(this.mexicoGeoJsonUrl);

      if (!response.ok) {
        throw new Error(`No se pudo cargar el mapa (${response.status})`);
      }

      const geoJson = (await response.json()) as GeoJSONFeatureCollection;
      const features = Array.isArray(geoJson.features) ? geoJson.features : [];
      const highlightStates = new Set(this.coverageAreas.map((area) => this.normalizeText(area.state)));
      const bounds = this.getBounds(features);

      this.mapPaths.set(
        features.flatMap((feature) => this.featureToPaths(feature, bounds, highlightStates)),
      );

      this.mapMarkers.set(
        this.coverageAreas.map((area) => ({
          name: area.name,
          ...this.project(area.longitude, area.latitude, bounds),
        })),
      );
    } catch (error) {
      console.error('Coverage map loading failed', error);
      this.mapError.set('No se pudo cargar el mapa de México en este momento.');
    } finally {
      this.isLoadingMap.set(false);
    }
  }

  trackArea(index: number, area: CoverageArea): string {
    return `${index}-${area.name}`;
  }

  trackPath(index: number): number {
    return index;
  }

  trackMarker(index: number, marker: MapMarker): string {
    return `${index}-${marker.name}`;
  }

  private featureToPaths(
    feature: GeoJSONFeature,
    bounds: { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number },
    highlightStates: Set<string>,
  ): ReadonlyArray<MapPath> {
    const geometry = feature.geometry;

    if (!geometry) {
      return [];
    }

    const highlighted = highlightStates.has(this.normalizeText(this.getFeatureName(feature)));

    if (geometry.type === 'Polygon') {
      return this.coordinatesToPaths(geometry.coordinates, bounds, highlighted);
    }

    if (geometry.type === 'MultiPolygon') {
      return (geometry.coordinates as ReadonlyArray<unknown>).flatMap((polygon) =>
        this.coordinatesToPaths(polygon, bounds, highlighted),
      );
    }

    return [];
  }

  private coordinatesToPaths(
    coordinates: unknown,
    bounds: { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number },
    highlighted: boolean,
  ): ReadonlyArray<MapPath> {
    if (!Array.isArray(coordinates)) {
      return [];
    }

    return (coordinates as ReadonlyArray<unknown>).flatMap((ring) => {
      if (!Array.isArray(ring)) {
        return [];
      }

      const points = (ring as ReadonlyArray<unknown>)
        .map((point) => this.projectCoordinate(point, bounds))
        .filter((point): point is Readonly<{ x: number; y: number }> => point !== null);

      if (points.length < 3) {
        return [];
      }

      const d = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' ');

      return [{ d: `${d} Z`, highlighted }];
    });
  }

  private projectCoordinate(
    coordinate: unknown,
    bounds: { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number },
  ): Readonly<{ x: number; y: number }> | null {
    if (!Array.isArray(coordinate) || coordinate.length < 2) {
      return null;
    }

    const [longitude, latitude] = coordinate as unknown as readonly [number, number];
    return this.project(longitude, latitude, bounds);
  }

  private project(
    longitude: number,
    latitude: number,
    bounds: { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number },
  ): Readonly<{ x: number; y: number }> {
    const usableWidth = this.mapWidth - this.mapPadding * 2;
    const usableHeight = this.mapHeight - this.mapPadding * 2;
    const longitudeRange = Math.max(bounds.maxLongitude - bounds.minLongitude, 1);
    const latitudeRange = Math.max(bounds.maxLatitude - bounds.minLatitude, 1);
    const scale = Math.min(usableWidth / longitudeRange, usableHeight / latitudeRange);
    const contentWidth = longitudeRange * scale;
    const contentHeight = latitudeRange * scale;
    const offsetX = (this.mapWidth - contentWidth) / 2;
    const offsetY = (this.mapHeight - contentHeight) / 2;

    return {
      x: offsetX + (longitude - bounds.minLongitude) * scale,
      y: offsetY + (bounds.maxLatitude - latitude) * scale,
    };
  }

  private getBounds(
    features: ReadonlyArray<GeoJSONFeature>,
  ): { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number } {
    const coordinates: GeoJSONPosition[] = [];

    for (const feature of features) {
      const geometry = feature.geometry;

      if (!geometry) {
        continue;
      }

      this.collectCoordinates(geometry.coordinates, coordinates);
    }

    if (coordinates.length === 0) {
      return {
        minLongitude: -117,
        maxLongitude: -86,
        minLatitude: 14,
        maxLatitude: 33,
      };
    }

    let minLongitude = coordinates[0][0];
    let maxLongitude = coordinates[0][0];
    let minLatitude = coordinates[0][1];
    let maxLatitude = coordinates[0][1];

    for (const [longitude, latitude] of coordinates) {
      if (longitude < minLongitude) {
        minLongitude = longitude;
      }

      if (longitude > maxLongitude) {
        maxLongitude = longitude;
      }

      if (latitude < minLatitude) {
        minLatitude = latitude;
      }

      if (latitude > maxLatitude) {
        maxLatitude = latitude;
      }
    }

    return {
      minLongitude,
      maxLongitude,
      minLatitude,
      maxLatitude,
    };
  }

  private collectCoordinates(coordinates: unknown, accumulator: GeoJSONPosition[]): void {
    const stack: unknown[] = [coordinates];
    const visited = new WeakSet<object>();

    while (stack.length > 0) {
      const current = stack.pop();

      if (!Array.isArray(current)) {
        continue;
      }

      if (visited.has(current)) {
        continue;
      }

      visited.add(current);

      if (current.length >= 2 && typeof current[0] === 'number' && typeof current[1] === 'number') {
        const [longitude, latitude] = current as unknown as readonly [number, number];
        accumulator.push([longitude, latitude]);
        continue;
      }

      for (const value of current) {
        stack.push(value);
      }
    }
  }

  private getFeatureName(feature: GeoJSONFeature): string {
    const properties = feature.properties;

    if (!properties) {
      return '';
    }

    const candidates = [
      properties['name'],
      properties['NAME'],
      properties['state'],
      properties['STATE'],
      properties['admin'],
      properties['ADMIN'],
      properties['label'],
      properties['LABEL'],
    ];

    for (const candidate of candidates) {
      if (typeof candidate === 'string' && candidate.trim().length > 0) {
        return candidate;
      }
    }

    return '';
  }

  private normalizeText(value: string): string {
    return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  }
}
