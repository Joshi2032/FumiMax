import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Proceso } from './proceso/proceso';
import { NosotrosComponent } from './nosotros/nosotros';
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
    Cobertura,
    Contacto,
    Galeria
]
})
export class LandingComponent {}
