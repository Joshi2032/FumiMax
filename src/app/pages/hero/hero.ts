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

  // Lista simple sin IDs conflictivos
  slides = [
    { title: 'Control de plagas residencial', eyebrow: 'Servicio Residencial' },
    { title: 'Soluciones empresariales MIP', eyebrow: 'Servicio Comercial' }
  ];

  goToSlide(index: number) {
    this.activeIndex.set(index);
  }
}
