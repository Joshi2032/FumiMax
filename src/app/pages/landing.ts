import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Proceso } from './proceso/proceso';
import { NosotrosComponent } from './nosotros/nosotros';
import { Testimonios } from './testimonios/testimonios';
import { Faq } from './faq/faq';
import { Cobertura } from './cobertura/cobertura';
import { Contacto } from './contacto/contacto';
import { Galeria } from "./galeria/galeria";

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  imports: [
    Hero,
    Proceso,
    NosotrosComponent,
    Testimonios,
    Faq,
    Cobertura,
    Contacto,
    Galeria
]
})
export class LandingComponent {}
