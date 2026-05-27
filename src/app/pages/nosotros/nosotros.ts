import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface HitoHistoria {
  ano: string;
  titulo: string;
  descripcion: string;
}

interface ValorEmpresa {
  nombre: string;
  icon: string;
  descripcion: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class NosotrosComponent implements OnInit {

  historia: HitoHistoria[] = [
    {
      ano: '1985',
      titulo: 'Fundación e Inicios',
      descripcion: 'El 08 de Mayo de 1985 nace formalmente bajo el nombre de MAXIFUM de Occidente S.A. en la ciudad de Guadalajara, Jalisco, iniciando operaciones de control sanitario urbano.'
    },
    {
      ano: '1991',
      titulo: 'Expansión al Bajío',
      descripcion: 'En Marzo de 1991 se establece la sucursal en La Piedad, Michoacán, quedando bajo la dirección y responsabilidad del Ing. Miguel Contreras Valdés para atender el corredor agrícola e industrial de la región.'
    },
    {
      ano: '2011',
      titulo: 'Consolidación Institucional',
      descripcion: 'En Noviembre de 2011, tras un sostenido crecimiento y madurez operativa, la empresa se constituye formalmente como MAXIFUM DEL BAJÍO S.A. DE C.V.'
    }
  ];

  valores: ValorEmpresa[] = [
    { nombre: 'Calidad', icon: '⭐', descripcion: 'Superar de forma consistente los estándares normativos en cada cerco perimetral.' },
    { nombre: 'Trabajo en Equipo', icon: '🤝', descripcion: 'Coordinación quirúrgica entre ingenieros de campo y departamentos de calidad.' },
    { nombre: 'Honestidad', icon: '🛡️', descripcion: 'Transparencia absoluta en la dosificación y trazabilidad documental entregada.' },
    { nombre: 'Actitud de Servicio', icon: '⚡', descripcion: 'Atención inmediata y enfoque proactivo en la resolución de contingencias críticas.' },
    { nombre: 'Respeto', icon: '🌱', descripcion: 'Salvaguarda estricta de la salud laboral y preservación del medio ambiente.' }
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Nuestra Historia y Cultura Organizacional | MAXIFUM DEL BAJÍO');
    this.metaService.updateTag({
      name: 'description',
      content: 'Conozca la trayectoria de MAXIFUM DEL BAJÍO S.A. DE C.V., protegiendo la inocuidad industrial y comercial desde 1985 bajo la dirección del Ing. Miguel Contreras.'
    });
  }
}
