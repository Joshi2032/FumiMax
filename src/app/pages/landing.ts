import { Component } from '@angular/core';
import { Hero } from './hero/hero';
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
  standalone: true,
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  imports: [
    Hero,
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
export class LandingComponent {}
