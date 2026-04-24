import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero/hero';
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
export class LandingComponent {
    ngAfterViewInit() {
      // Animación de aparición al hacer scroll con retardo progresivo
      const sections = Array.from(document.querySelectorAll('.section, .hero-section'));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            (entry.target as HTMLElement).style.transitionDelay = `${idx * 0.15}s`;
            entry.target.classList.add('in-view');
          }
        });
      }, {
        threshold: 0.15
      });
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  menuOpen = false;

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.menuOpen = false;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
