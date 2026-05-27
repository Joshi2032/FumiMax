import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImagenProyecto {
  url: string;
  titulo: string;
  ubicacion: string;
  sector: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss'
})
export class Galeria implements OnInit {
  currentIndex: number = 0;

  proyectos: ImagenProyecto[] = [
    {
      url: '/Servicio%20a%20BIotecnologia.jpeg',
      titulo: 'Servicio a BIotecnologia',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/Servicio%20a%20BIotecnologia%202.jpeg',
      titulo: 'Servicio a BIotecnologia 2',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/Servicio%20a%20BIotecnologia%203.jpeg',
      titulo: 'Servicio a BIotecnologia 3',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/servicio%20a%20los%20fresnos.jpeg',
      titulo: 'servicio a los fresnos',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/Servicio%20goca.jpeg',
      titulo: 'Servicio goca',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/trabajador.jpeg',
      titulo: 'trabajador',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    },
    {
      url: '/Unidad%20productiva%20san%20miguel.jpeg',
      titulo: 'Unidad productiva san miguel',
      ubicacion: 'Imagen de proyecto real',
      sector: 'Galería de campo'
    }
  ];

  ngOnInit(): void {}

  siguienteSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.proyectos.length;
  }

  anteriorSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.proyectos.length) % this.proyectos.length;
  }

  setSlide(index: number): void {
    this.currentIndex = index;
  }
}
