import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [], // <-- Dejamos esto vacío (o con los módulos que uses en tus otras tarjetas)
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Servicios MIP | Soluciones Residenciales e Industriales - Fumi-Max');
    this.metaService.updateTag({
      name: 'description',
      content: 'Ofrecemos planes integrales de fumigación residencial y soluciones de control de plagas comerciales e industriales avalados por auditorías de sanidad.'
    });
  }
}
