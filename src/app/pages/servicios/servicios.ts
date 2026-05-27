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
  // Estado para controlar qué pestaña está renderizada
  sectorActivo: string = 'industrial';

  sectores: ProtocoloServicio[] = [
    {
      id: 'industrial',
      tabName: 'Industrial y CEDIS',
      icon: '🏭',
      titulo: 'Cordones Sanitarios de Alta Densidad para Industria, Almacenes y Agro',
      subtitulo: 'Protección perimetral estricta para cadenas de suministro y empaques',
      descripcion: 'Diseñamos e implementamos sistemas de Manejo Integrado de Plagas (MIP) específicos para plantas manufactureras de alta exigencia, almacenes complejos, la industria automotriz y centros de distribución (CEDIS) del Bajío. Nos enfocamos en el blindaje perimetral, el monitoreo predictivo y la disminución del uso de plaguicidas en áreas críticas mediante el uso prioritario de medios mecánicos avanzados.',
      enfoqueClave: [
        'Industria Alimentaria y de Bebidas: Control estricto de vectores diarreicos y contaminantes bajo estándares de exportación.',
        'Sector Automotriz y Aeroespacial: Blindaje técnico perimetral contra roedores urbanos que comprometan cableados o componentes.',
        'Centros Logísticos y de Almacenamiento (CEDIS): Monitoreo predictivo continuo en zonas de alta rotación.',
        'Plantas Manufactureras y Maquiladoras: Estaciones de cebado herméticas numeradas para superar auditorías severas.'
      ],
      normativas: ['COFEPRIS', 'Registros CICOPLAFEST', 'Estándares EPA (EE. UU.)', 'Norma Oficial Mexicana']
    },
    {
      id: 'comercial',
      tabName: 'Comercio y Restaurantes',
      icon: '🏢',
      titulo: 'Protección de Marca e Inocuidad Alimentaria Comercial y Clínica',
      subtitulo: 'Tratamientos discretos y efectivos que garantizan su operación continua',
      descripcion: 'Soluciones orientadas al sector hostelero, restaurantero, retail y entornos de salud estrictamente regulados. Implementamos aplicaciones de grado clínico controladas sin olores desagradables y en horarios especiales para no interferir con la operación, cumpliendo con las más exigentes auditorías de sanidad nacionales e internacionales.',
      enfoqueClave: [
        'Sector Farmacéutico y Dispositivos Médicos: Control biológico absoluto bajo normativas de nula volatilidad residual.',
        'Centros de Salud, Clínicas y Laboratorios: Aplicación quirúrgica en ambientes controlados con registros COFEPRIS vigentes.',
        'Restaurantes y Comedores Industriales: Soporte documental riguroso para la aprobación de Distintivo H y NOM-251.',
        'Hoteles, Moteles y Complejos Comerciales: Tratamientos discretos con alto efecto de expulsión perimetral.'
      ],
      normativas: ['Distintivo H', 'Norma Oficial Mexicana NOM-251', 'Regulación Sanitaria Local', 'Protocolos Clínicos']
    },
    {
      id: 'residencial',
      tabName: 'Residencial',
      icon: '🏠',
      titulo: 'Resguardo Sanitario Familiar y Control Urbano Habitacional',
      subtitulo: 'Tratamientos seguros de amplio espectro contra plagas caseras',
      descripcion: 'Protegemos su hogar y a su familia (incluyendo mascotas) de los riesgos sanitarios provocados por insectos y roedores urbanos. Aplicaciones limpias con efecto de expulsión y prolongada persistencia residual, utilizando formulaciones autorizadas con bandas de seguridad verde y azul.',
      enfoqueClave: [
        'Casas Habitación y Complejos Residenciales: Persistencia residual prolongada sin aromas molestos ni desalojos.',
        'Transportes de Pasajeros y Unidades de Carga: Desinfección integral y sanidad estricta en rutas de traslado.',
        'Control Perimetral de Jardines y Zoclos: Barreras biológicas seguras que protegen a sus animales domésticos.',
        'Pólizas de Mantenimiento Bimestral: Monitoreo continuo con cobertura total y garantía por escrito.'
      ],
      normativas: ['Uso Urbano Autorizado', 'Línea Bioracional Segura', 'Registros de Inocuidad COFEPRIS']
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
