import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink],
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

    this.metaService.updateTag({ property: 'og:title', content: 'Planes de Control Integrado de Plagas | Fumi-Max' });
  }
}
