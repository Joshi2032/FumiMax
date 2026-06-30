import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImagenProyecto {
  url: string;
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
export class Galeria implements OnInit, OnDestroy {
  currentIndex: number = 0;
  timer: any; // Variable para guardar el temporizador

  proyectos: ImagenProyecto[] = [
    {
      url: 'Servicio a BIotecnologia.jpeg',
      ubicacion: 'Instalaciones de Biotecnología',
      sector: 'Grado Clínico / Laboratorios'
    },
    {
      url: 'Unidad productiva san miguel.jpeg',
      ubicacion: 'Unidad Productiva San Miguel',
      sector: 'Industrial Manufacturero'
    },
    {
      url: 'Servicio goca.jpeg',
      ubicacion: 'Instalaciones GOCA',
      sector: 'Operación Logística / CEDIS'
    },
    {
      url: 'servicio a los fresnos.jpeg',
      ubicacion: 'Complejo Los Fresnos',
      sector: 'Comercial / Áreas Comunes'
    },
    {
      url: 'trabajador.jpeg',
      ubicacion: 'Despliegue Técnico Operativo',
      sector: 'Intervención Especializada'
    }
  ];

  ngOnInit(): void {
    // Inicia el carrusel automático al cargar la página
    this.iniciarAutoPlay();
  }

  ngOnDestroy(): void {
    // Limpia el temporizador al salir de la página para no saturar la memoria
    this.detenerAutoPlay();
  }

  iniciarAutoPlay(): void {
    // Configura el cambio cada 5000 milisegundos (5 segundos)
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.proyectos.length;
    }, 5000);
  }

  detenerAutoPlay(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  siguienteSlide(): void {
    this.detenerAutoPlay(); // Pausa el timer actual
    this.currentIndex = (this.currentIndex + 1) % this.proyectos.length;
    this.iniciarAutoPlay(); // Lo reinicia desde cero
  }

  anteriorSlide(): void {
    this.detenerAutoPlay();
    this.currentIndex = (this.currentIndex - 1 + this.proyectos.length) % this.proyectos.length;
    this.iniciarAutoPlay();
  }

  setSlide(index: number): void {
    this.detenerAutoPlay();
    this.currentIndex = index;
    this.iniciarAutoPlay();
  }
}
