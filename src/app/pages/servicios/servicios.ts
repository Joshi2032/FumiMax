import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface ProtocoloServicio {
  id: string;
  tabName: string;
  icon: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  enfoqueClave: string[];
  imagen: string; // <-- Nueva propiedad para la ruta de la imagen
  normativas: string[];
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios implements OnInit {
  sectorActivo: string = 'industrial';

  sectores: ProtocoloServicio[] = [
    {
      id: 'industrial',
      tabName: 'Industrial y CEDIS',
      icon: '🏭',
      titulo: 'Cordones Sanitarios de Alta Densidad',
      subtitulo: 'Blindaje perimetral y protección de la cadena de suministro.',
      descripcion: 'Sistemas avanzados de Manejo Integrado de Plagas (MIP) para la industria de alta exigencia del Bajío. Nos enfocamos en el monitoreo predictivo y el uso prioritario de medios mecánicos avanzados para minimizar plaguicidas en áreas críticas.',
      enfoqueClave: [
        'Alimentos y Bebidas: Estándares de exportación y control estricto de vectores.',
        'Automotriz y Aeroespacial: Blindaje perimetral contra roedores para proteger componentes.',
        'Logística y CEDIS: Monitoreo predictivo continuo en zonas de alta rotación.',
        'Plantas Manufactureras: Estaciones herméticas numeradas listas para auditorías.'
      ],
      imagen: 'control-plagas-industrial.jpg', // <-- Ruta local sugerida
      normativas: ['COFEPRIS', 'CICOPLAFEST', 'Estándares EPA', 'Normas Oficiales Mexicanas']
    },
    {
      id: 'comercial',
      tabName: 'Comercio y Salud',
      icon: '🏢',
      titulo: 'Protección de Marca e Inocuidad',
      subtitulo: 'Tratamientos discretos que garantizan su operación continua.',
      descripcion: 'Soluciones para comercio, restaurantes y entornos de salud. Implementamos aplicaciones sin olor en horarios especiales para no interferir con su operación, listos para superar auditorías de sanidad.', 
      enfoqueClave: [
        'Farmacéutica y Dispositivos Médicos: Control estricto con productos de nula volatilidad residual.',
        'Clínicas y Laboratorios: Aplicación en ambientes controlados con registros COFEPRIS vigentes.',
        'Restaurantes y Comedores: Soporte documental para aprobación de Distintivo H y NOM-251.',
        'Hoteles y Centros Comerciales: Tratamientos discretos con alta efectividad de expulsión.'
      ],
      imagen: 'control-plagas-comercial.jpg',
      normativas: ['Distintivo H', 'NOM-251-SSA1', 'Regulación Sanitaria', 'Protocolos Clínicos']
    },
    {
      id: 'residencial',
      tabName: 'Residencial',
      icon: '🏠',
      titulo: 'Protección Familiar y Residencial',
      subtitulo: 'Tratamientos seguros y de amplio espectro contra plagas caseras.',
      descripcion: 'Protegemos tu hogar, familia y mascotas de riesgos sanitarios. Utilizamos aplicaciones limpias, sin olores molestos y con productos autorizados de banda verde y azul que garantizan una larga protección residual.',
      enfoqueClave: [
        'Casas y Residenciales: Protección prolongada sin necesidad de desalojar la vivienda.',
        'Jardines y Perímetros: Barreras seguras que cuidan a tus animales domésticos.',
        'Transporte de Pasajeros: Desinfección integral y control de plagas en unidades de traslado.',
        'Pólizas Bimestrales: Monitoreo continuo con cobertura total y garantía por escrito.'
      ],
      imagen: 'control-plagas-residencial.jpg',
      normativas: ['Uso Urbano Autorizado', 'Línea Bioracional', 'Registros COFEPRIS']
    }
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Soluciones por Sector | Control de Plagas Avanzado - MAXIFUM DEL BAJÍO');
    this.metaService.updateTag({
      name: 'description',
      content: 'MAXIFUM DEL BAJÍO S.A. DE C.V. ofrece control integrado de plagas certificado por COFEPRIS y la EPA para los sectores industrial, comercial y residencial.'
    });
  }

  cambiarTab(id: string): void {
    this.sectorActivo = id;
  }
}
