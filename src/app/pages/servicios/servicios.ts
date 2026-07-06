import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface EnfoqueClave {
  icono: string;
  titulo: string;
  descripcion: string;
}

interface ProtocoloServicio {
  id: string;
  tabName: string;
  icon: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  enfoqueClave: EnfoqueClave[];
  imagen: string;
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
        { icono: '🍽️', titulo: 'Alimentos y Bebidas', descripcion: 'Control de vectores para exportación.' },
        { icono: '🚗', titulo: 'Automotriz', descripcion: 'Blindaje perimetral de componentes.' },
        { icono: '📦', titulo: 'Logística y CEDIS', descripcion: 'Monitoreo continuo en zonas de rotación.' },
        { icono: '🏭', titulo: 'Plantas Manufactureras', descripcion: 'Estaciones herméticas numeradas.' },
      ],
      imagen: 'control-plagas-industrial.jpg',
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
        { icono: '💊', titulo: 'Farmacéutica y Dispositivos Médicos', descripcion: 'Productos sin volatilidad residual.' },
        { icono: '🧪', titulo: 'Clínicas y Laboratorios', descripcion: 'Registros COFEPRIS vigentes.' },
        { icono: '🍴', titulo: 'Restaurantes y Comedores', descripcion: 'Soporte para Distintivo H y NOM-251.' },
        { icono: '🏨', titulo: 'Hoteles y Centros Comerciales', descripcion: 'Tratamientos discretos, alta efectividad.' },
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
        { icono: '🏡', titulo: 'Casas y Residenciales', descripcion: 'Protección sin desalojar la vivienda.' },
        { icono: '🌳', titulo: 'Jardines y Perímetros', descripcion: 'Barreras seguras para mascotas.' },
        { icono: '🚌', titulo: 'Transporte de Pasajeros', descripcion: 'Desinfección integral de unidades.' },
        { icono: '📋', titulo: 'Pólizas Bimestrales', descripcion: 'Cobertura y garantía por escrito.' },
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
