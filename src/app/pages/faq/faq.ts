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
      pregunta: '¿Los productos que utilizan son seguros para niños y mascotas?',
      respuesta: 'Sí, todos nuestros productos están certificados y aprobados por las autoridades sanitarias. Utilizamos formulaciones de baja toxicidad que son seguras para tu familia y mascotas. Además, te proporcionamos instrucciones claras sobre tiempos de reingreso después del tratamiento.',
    },
    {
      pregunta: '¿Cuánto tiempo tarda en hacer efecto el tratamiento?',
      respuesta: 'El tiempo varía según el tipo de plaga y tratamiento, pero la mayoría de los clientes nota resultados en pocas horas o días.',
    },
    {
      pregunta: '¿Ofrecen garantía en sus servicios?',
      respuesta: 'Sí, todos nuestros servicios cuentan con garantía extendida y seguimiento post-tratamiento.',
    },
    {
      pregunta: '¿Necesito salir de mi casa durante la fumigación?',
      respuesta: 'En la mayoría de los casos, solo es necesario ausentarse durante el tratamiento y un breve periodo posterior. Te indicaremos los tiempos exactos.',
    },
    {
      pregunta: '¿Con qué frecuencia debo fumigar mi hogar o negocio?',
      respuesta: 'Recomendamos tratamientos preventivos cada 3 a 6 meses, dependiendo del entorno y nivel de riesgo.',
    },
    {
      pregunta: '¿Qué tipo de plagas pueden controlar?',
      respuesta: 'Controlamos cucarachas, hormigas, termitas, roedores, arañas, pulgas, chinches y más.',
    },
  ]);

  openIndex = signal<number | null>(0);

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
