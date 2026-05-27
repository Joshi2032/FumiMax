import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Proceso } from './proceso/proceso';
import { NosotrosComponent } from './nosotros/nosotros';
import { Historia } from './historia/historia';
import { Testimonios } from './testimonios/testimonios';
import { FaqComponent } from './faq/faq';
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
    NosotrosComponent,
    Historia,
    Testimonios,
    FaqComponent,
    Cobertura,
    Contacto
  ]
})
export class LandingComponent {}
