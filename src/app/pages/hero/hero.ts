import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fumi-Max | Manejo Integrado de Plagas Profesionales');

    this.metaService.updateTag({
      name: 'description',
      content: 'Empresa líder en control y erradicación de plagas residenciales, comerciales e industriales en el Bajío. Certificaciones y licencias sanitarias oficiales.'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Fumi-Max | Control de Plagas con Rigor Clínico' });
    this.metaService.updateTag({ property: 'og:description', content: 'Servicios de fumigación técnica contra insectos, roedores y termitas con planes MIP alineados a COFEPRIS.' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/Maxifum.png' });
  }
}
