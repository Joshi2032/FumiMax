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
      titulo: 'Cordones Sanitarios de Alta Densidad para Industria y Logística',
      subtitulo: 'Cero tolerancia a vectores biológicos en cadenas de suministro',
      descripcion: 'Diseñamos e implementamos sistemas de Manejo Integrado de Plagas (MIP) específicos para plantas manufactureras, almacenes complejos y centros de distribución. Nos enfocamos en el blindaje perimetral y el monitoreo predictivo.',
      enfoqueClave: [
        'Monitoreo perimetral mediante estaciones de cebado herméticas numeradas.',
        'Análisis de tendencias de capturas y mapas de calor analíticos.',
        'Exclusión estructural y control estricto de accesos logísticos.'
      ],
      normativas: ['COFEPRIS', 'Registros CICOPLAFEST', 'Estándares EPA (EE. UU.)', 'Norma Oficial Mexicana']
    },
    {
      id: 'comercial',
      tabName: 'Comercio y Restaurantes',
      icon: '🏢',
      titulo: 'Protección de Marca e Inocuidad Alimentaria Comercial',
      subtitulo: 'Tratamientos discretos y efectivos que garantizan su operación',
      descripcion: 'Soluciones orientadas al sector hostelero, restaurantero y retail. Implementamos aplicaciones controladas sin olores desagradables y en horarios especiales para no interferir con la experiencia de sus clientes.',
      enfoqueClave: [
        'Sistemas de gel portador bioracional imperceptibles para el público.',
        'Trampas de luz UV avanzadas para la captura técnica de insectos voladores.',
        'Carpetas operativas inmediatas para la aprobación de inspecciones Locales.'
      ],
      normativas: ['Distintivo H', 'Norma Oficial Mexicana NOM-251', 'Regulación Sanitaria Local']
    },
    {
      id: 'farmaceutico',
      tabName: 'Clínico y Farmacéutico',
      icon: '🔬',
      titulo: 'Protocolos Rigoristas de Bioseguridad y Ambientes Controlados',
      subtitulo: 'Máxima exigencia documental y química libre de contaminantes',
      descripcion: 'Tratamientos especializados para áreas críticas que exigen condiciones de asepsia extrema, laboratorios y clínicas. Empleamos exclusivamente productos banda verde de nula volatilidad residual.',
      enfoqueClave: [
        'Cronogramas quirúrgicos coordinados con los paros técnicos de la planta.',
        'Trazabilidad documental absoluta de cada gramo de ingrediente activo aplicado.',
        'Validación estricta de Hojas de Seguridad (MSDS) para auditorías densas.'
      ],
      normativas: ['Buenas Prácticas de Fabricación (GMP)', 'COFEPRIS Federal', 'Auditorías de Calidad']
    },
    {
      id: 'residencial',
      tabName: 'Residencial',
      icon: '🏠',
      titulo: 'Resguardo Sanitario Familiar y Control Urbano Habitacional',
      subtitulo: 'Tratamientos seguros de amplio espectro contra plagas caseras',
      descripcion: 'Protegemos su hogar y a su familia (incluyendo mascotas) de los riesgos sanitarios provocados por insectos y roedores urbanos. Aplicaciones limpias con efecto de expulsión y prolongada persistencia residual.',
      enfoqueClave: [
        'Productos de grado técnico residencial sin aromas molestos ni desalojos prolongados.',
        'Focalización técnica en grietas, nidos subterráneos y puntos de entrada.',
        'Póliza de garantía por escrito con soporte de reaplicación sin costo.'
      ],
      normativas: ['Uso Urbano Autorizado', 'Línea Bioracional Segura']
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
