import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface PlagaVector {
  id: string;
  nombre: string;
  nombreCientifico: string;
  categoria: 'rastrero' | 'volador' | 'roedor' | 'madera';
  riesgo: 'Crítico' | 'Moderado' | 'Alto';
  riesgoClass: 'riesgo-critico' | 'riesgo-moderado' | 'riesgo-alto';
  descripcion: string;
  amenazaClave: string;
}

@Component({
  selector: 'app-plagas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plagas.html',
  styleUrl: './plagas.scss',
})
export class Plagas implements OnInit {
  // Estado para saber qué filtro está activo
  filtroActivo: string = 'todas';

  catalogoplagas: PlagaVector[] = [
    {
      id: 'cucaracha',
      nombre: 'Cucaracha Germánica / Americana',
      nombreCientifico: 'Blattella germanica / Periplaneta americana',
      categoria: 'rastrero',
      riesgo: 'Crítico',
      riesgoClass: 'riesgo-critico',
      descripcion: 'Alta capacidad de proliferación en grietas de cocinas y almacenes de alimentos. Transmisoras mecánicas de patógenos como Salmonella y E. coli.',
      amenazaClave: 'Contaminación directa de materia prima y pérdida de auditorías sanitarias.'
    },
    {
      id: 'roedor',
      nombre: 'Rata de Alcantarilla / Ratón Doméstico',
      nombreCientifico: 'Rattus norvegicus / Mus musculus',
      categoria: 'roedor',
      riesgo: 'Crítico',
      riesgoClass: 'riesgo-critico',
      descripcion: 'Plaga de alto impacto estructural y sanitario. Destruyen cableados, estructuras de madera y contaminan insumos con heces, orina y pelaje.',
      amenazaClave: 'Riesgo de incendios por corto circuito, transmisión de enfermedades como salmonelosis, Brucelosis, leptospirosis, fiebre aptosa, triquinosis, Peste, rabia, otras.'
    },
    {
      id: 'mosca',
      nombre: 'Mosca Doméstica / del Vinagre',
      nombreCientifico: 'Musca domestica / Drosophila melanogaster',
      categoria: 'volador',
      riesgo: 'Alto',
      riesgoClass: 'riesgo-alto',
      descripcion: 'Vectores mecánicos voladores atraídos por materia orgánica en descomposición. Su presencia en comedores, plantas de alimentos y empaques de frutas y vegetales, contaminan con sus patógenos en los sitios donde se Posan.',
      amenazaClave: 'Altas cargas bacterianas en superficies de contacto directo con alimentos.'
    },
    {
      id: 'termita',
      nombre: 'Termita Subterránea',
      nombreCientifico: 'Reticulitermes spp.',
      categoria: 'madera',
      riesgo: 'Alto',
      riesgoClass: 'riesgo-alto',
      descripcion: 'Insectos xilófagos que consumen la celulosa desde el interior de las estructuras sin dejar rastro visible hasta que el daño es severo.',
      amenazaClave: 'Colapso de estructuras de soporte de madera y pérididas económicas críticas.'
    },
    {
      id: 'chinche',
      nombre: 'Chinche de Cama',
      nombreCientifico: 'Cimex lectularius',
      categoria: 'rastrero',
      riesgo: 'Moderado',
      riesgoClass: 'riesgo-moderado',
      descripcion: 'Plaga hematófaga de alta resistencia que coloniza colchones, zoclos y fisuras en hoteles, hostales o entornos residenciales.',
      amenazaClave: 'Afectación severa a la reputación comercial de marcas hoteleras.'
    }
  ];

  // Arreglo que se renderiza en el HTML
  plagasFiltradas: PlagaVector[] = [];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Guía e Identificación de Plagas Urbanas | Fumi-Max');
    this.metaService.updateTag({
      name: 'description',
      content: 'Consulte nuestro manual técnico de vectores biológicos e identificación de plagas. Clasificación por nivel de riesgo para industrias y comercios.'
    });

    // Al iniciar, mostramos todo el catálogo
    this.plagasFiltradas = this.catalogoplagas;
  }

  aplicarFiltro(categoria: string): void {
    this.filtroActivo = categoria;

    if (categoria === 'todas') {
      this.plagasFiltradas = this.catalogoplagas;
    } else {
      this.plagasFiltradas = this.catalogoplagas.filter(plaga => plaga.categoria === categoria);
    }
  }
}
