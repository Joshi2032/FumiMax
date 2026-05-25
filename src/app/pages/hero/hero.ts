import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  activeIndex = signal(0);

  slides = [
    {
      src: '/Maxifum.png?v=1', // <-- El ?v=1 hace que la ruta sea única para Angular
      alt: 'Control de plagas residencial',
      eyebrow: 'Servicio Residencial',
      title: 'Protege tu hogar y familia',
      description: 'Tratamientos seguros y eficaces contra insectos y roedores.'
    },
    {
      src: '/Maxifum.png?v=2', // <-- El ?v=2 evita la colisión de la llave
      alt: 'Control de plagas comercial',
      eyebrow: 'Servicio Comercial e Industrial',
      title: 'Soluciones empresariales MIP',
      description: 'Cumplimos estrictamente con auditorías y regulaciones sanitarias.'
    }
  ];

  goToSlide(index: number) {
    this.activeIndex.set(index);
  }
}
