import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Proceso } from './proceso/proceso';
import { NosotrosComponent } from './nosotros/nosotros';
import { Testimonios } from './testimonios/testimonios';
import { FaqComponent } from './faq/faq';
import { CoberturaComponent } from './cobertura/cobertura';
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
    Testimonios,
    FaqComponent,
    CoberturaComponent,
    Contacto
  ]
})
export class LandingComponent {}
