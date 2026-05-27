import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser'; // <-- Asegúrate de tener estos imports

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Título optimizado para buscadores: Ataca "Fumigadoras", "Control de Plagas" y la región clave
    this.titleService.setTitle('Fumigadoras y Control de Plagas en La Piedad | MAXIFUM DEL BAJÍO');

    // Descripción indexable con intención de búsqueda comercial e industrial
    this.metaService.updateTag({
      name: 'description',
      content: '¿Busca fumigadoras confiables? MAXIFUM DEL BAJÍO ofrece servicios de fumigación y manejo integrado de plagas residencial, comercial e industrial con certificación COFEPRIS.'
    });
  }
}
