import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  pregunta: string;
  respuesta: string;
  abierta: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class FaqComponent {
  faqs: FAQItem[] = [
    {
      pregunta: '¿Los productos químicos que aplican representan un riesgo para niños o mascotas?',
      respuesta: 'No. En Fumi-Max utilizamos exclusivamente productos de categoría bioracional de banda verde y azul autorizados por COFEPRIS. Estos compuestos atacan de forma específica el sistema biológico de los vectores diarreicos o insectos, garantizando un entorno completamente seguro para humanos y animales domésticos tras el periodo de ventilación indicado por el técnico.',
      abierta: false
    },
    {
      pregunta: '¿Qué documentación técnica entregan para auditorías comerciales o industriales?',
      respuesta: 'Al concluir cada servicio expedimos una carpeta técnica oficial que incluye: Certificado de Servicio con validez federal ante COFEPRIS, Hojas de Seguridad (MSDS) de los productos químicos aplicados, Croquis de localización de dispositivos de monitoreo (en caso de contratos industriales), y el reporte analítico del sistema MIP firmado por el ingeniero a cargo.',
      abierta: false
    },
    {
      pregunta: '¿Es necesario abandonar el inmueble o las oficinas durante la aplicación?',
      respuesta: 'En la gran mayoría de los tratamientos residenciales y comerciales modernos empleamos sistemas de gel portador y cebado hermético que no requieren desalojar el área ni interrumpir operaciones. En aplicaciones más densas como micronebulizaciones perimetrales, solo se solicita un periodo de exclusión e inocuidad de 2 a 4 horas como medida estándar de prevención.',
      abierta: false
    },
    {
      pregunta: '¿Cuánto tiempo tarda en hacer efecto el tratamiento y qué garantía ofrecen?',
      respuesta: 'El derribo inicial de la plaga es inmediato durante las primeras 24 horas. Sin embargo, el control definitivo del ciclo biológico (huevecillos y nidos) toma entre 7 y 14 días. Ofrecemos pólizas de garantía por escrito de hasta 30 días en servicios específicos o monitoreo continuo bimestral/mensual mediante contratos corporativos.',
      abierta: false
    },
    {
      pregunta: '¿Qué preparación previa requiere el lugar antes de que llegue el técnico?',
      respuesta: 'Se solicita de manera general despejar zoclos o perímetros de las paredes, guardar alimentos descubiertos en recipientes herméticos, y realizar una limpieza básica del suelo. Al agendar su cita, nuestro sistema le enviará un documento técnico detallado con las recomendaciones exactas según el tipo de vector a combatir.',
      abierta: false
    }
  ];

  // Cambia el estado de la pregunta seleccionada y colapsa las demás
  toggleFaq(index: number): void {
    this.faqs = this.faqs.map((item, i) => ({
      ...item,
      abierta: i === index ? !item.abierta : false
    }));
  }
}
