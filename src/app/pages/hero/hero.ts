import { Component, OnDestroy, OnInit, signal } from '@angular/core';

type HeroSlide = Readonly<{
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}>;

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  readonly slides: ReadonlyArray<HeroSlide> = [
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Técnico aplicando tratamiento preventivo en un entorno residencial',
      eyebrow: 'Cobertura residencial',
      title: 'Protección continua para hogares y condominios',
      description: 'Planes de control preventivo diseñados para reducir riesgos y mantener espacios seguros todo el año.'
    },
    {
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
      alt: 'Profesional inspeccionando instalaciones comerciales',
      eyebrow: 'Operación comercial',
      title: 'Soluciones discretas para negocios y cadenas',
      description: 'Atención para restaurantes, oficinas e instalaciones con protocolos ágiles y mínima interrupción.'
    },
    {
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Equipo realizando una inspección especializada de plagas',
      eyebrow: 'Respuesta especializada',
      title: 'Inspección, tratamiento y seguimiento en un solo flujo',
      description: 'Un proceso claro que combina diagnóstico técnico, intervención precisa y seguimiento posterior.'
    }
  ];

  readonly activeIndex = signal(0);
  private autoplayId: ReturnType<typeof window.setInterval> | undefined;

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && this.slides.length > 1) {
      this.autoplayId = window.setInterval(() => {
        this.nextSlide();
      }, 6000);
    }
  }

  ngOnDestroy(): void {
    if (this.autoplayId !== undefined) {
      window.clearInterval(this.autoplayId);
    }
  }

  nextSlide(): void {
    this.activeIndex.update((index) => (index + 1) % this.slides.length);
  }

  previousSlide(): void {
    this.activeIndex.update((index) => (index - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number): void {
    this.activeIndex.set(index);
  }
}
