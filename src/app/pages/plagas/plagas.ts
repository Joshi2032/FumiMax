import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plagas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './plagas.html',
  styleUrl: './plagas.scss',
})
export class Plagas implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Guía e Identificación de Plagas Urbanas | Fumi-Max');

    this.metaService.updateTag({
      name: 'description',
      content: 'Consulte nuestro manual técnico de vectores biológicos: cucarachas, roedores, termitas y chinches. Conozca los riesgos sanitarios y estructurales.'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Identificación Técnica de Plagas Urbanas - Fumi-Max' });
  }
}
