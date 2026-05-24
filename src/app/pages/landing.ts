import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Hero } from './hero/hero';
import { Plagas } from './plagas/plagas';
import { Servicios } from './servicios/servicios';
import { Proceso } from './proceso/proceso';
import { Nosotros } from './nosotros/nosotros';
import { Historia } from './historia/historia';
import { Certificaciones } from './certificaciones/certificaciones';
import { Testimonios } from './testimonios/testimonios';
import { Faq } from './faq/faq';
import { Cobertura } from './cobertura/cobertura';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Hero,
    Plagas,
    Servicios,
    Proceso,
    Nosotros,
    Historia,
    Certificaciones,
    Testimonios,
    Faq,
    Cobertura,
    Contacto
  ]
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  private observer!: IntersectionObserver;
  private seenSections = new WeakSet<Element>();

  ngAfterViewInit() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section, .hero-shell'));

    sections.forEach((el, i) => {
      if (prefersReduced) {
        el.classList.add('in-view');
        return;
      }
      // Alternar entrada izquierda / derecha / arriba / abajo
      const dir = i === 0 ? 'from-top' : i % 3 === 1 ? 'from-left' : i % 3 === 2 ? 'from-right' : 'from-bottom';
      el.dataset['enterDir'] = dir;
    });

    if (prefersReduced) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.seenSections.has(entry.target)) {
            this.seenSections.add(entry.target);
            const el = entry.target as HTMLElement;
            const idx = sections.indexOf(el);
            el.style.transitionDelay = idx === 0 ? '0s' : `${Math.min(idx * 0.08, 0.4)}s`;
            el.classList.add('in-view');
            el.addEventListener(
              'transitionend',
              () => { el.style.transitionDelay = '0s'; },
              { once: true }
            );
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    sections.forEach((s) => this.observer.observe(s));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.menuOpen = false;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
