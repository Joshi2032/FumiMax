import { Component, signal } from '@angular/core';

interface FaqItem {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  faqs = signal<FaqItem[]>([
    {
      pregunta: '¿Qué tipo de plagas atienden?',
      respuesta: 'Atendemos las plagas más comunes en casas, negocios e industria: cucarachas, hormigas, mosquitos, arañas, termitas, roedores, chinches y más.',
    },
    {
      pregunta: '¿Los productos son seguros para niños y mascotas?',
      respuesta: 'Sí. Usamos productos autorizados y te explicamos cuándo puedes volver a usar el espacio con tranquilidad.',
    },
    {
      pregunta: '¿Tienen servicio para casas, negocios e industrias?',
      respuesta: 'Sí. Adaptamos el servicio según el lugar: hogar, oficina, restaurante, bodega, local comercial o industria.',
    },
    {
      pregunta: '¿Necesito salir durante la fumigación?',
      respuesta: 'Depende del tratamiento, pero en muchos casos solo es necesario salir por un tiempo corto. Te lo indicamos antes de empezar.',
    },
    {
      pregunta: '¿Con qué frecuencia conviene fumigar?',
      respuesta: 'Lo ideal depende del tipo de lugar y del problema. En muchos casos se recomienda un plan preventivo cada 3 a 6 meses.',
    },
    {
      pregunta: '¿Dan garantía en el servicio?',
      respuesta: 'Sí, nuestros servicios incluyen garantía y seguimiento según el tipo de tratamiento.',
    },
  ]);

  openIndex = signal<number | null>(0);

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
