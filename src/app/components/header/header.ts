import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  // Estado para controlar la visibilidad del menú en móviles
  isMenuOpen = false;

  // Alterna el estado abierto/cerrado al presionar el botón hamburguesa
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cierra el menú automáticamente cuando el usuario hace clic en un enlace de ruta
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
