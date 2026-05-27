import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto implements OnInit {
  leadForm!: FormGroup;
  isSubmitting = false;
  formEnviado = false;

  private readonly WHATSAPP_NUMBER = '3521887541';

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Inicialización del SEO específico
    this.titleService.setTitle('Cotización Gratis | Agenda una Inspección Técnica - Fumi-Max');
    this.metaService.updateTag({
      name: 'description',
      content: 'Solicite una cotización técnica sin costo. Canalice sus requerimientos comerciales, residenciales o industriales de control de plagas de forma inmediata.'
    });

    this.initForm();
  }

  private initForm(): void {
    this.leadForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      servicio: ['', [Validators.required]],
      mensaje: ['']
    });
  }

  onSubmit(): void {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.formEnviado = false;

    const datos = this.leadForm.value;

    const serviciosMapeados: { [key: string]: string } = {
      residencial: 'Fumigación Residencial 🏠',
      comercial: 'Control Comercial / Negocios 🏢',
      industrial: 'Control de Plagas Industrial 🏭'
    };
    const servicioTexto = serviciosMapeados[datos.servicio] || datos.servicio;

    const mensajeTexto =
      `💼 *FUMI-MAX | MANEJO INTEGRADO DE PLAGAS*\n` +
      `====================================\n` +
      `📋 *ORDEN DE INSPECCIÓN / COTIZACIÓN*\n` +
      `====================================\n\n` +
      `🔹 *DATOS DEL CLIENTE*\n` +
      `• *Nombre:* ${datos.nombre}\n` +
      `• *Teléfono:* ${datos.telefono}\n` +
      `• *Correo:* ${datos.email}\n\n` +
      `🔹 *DETALLES DEL SERVICIO*\n` +
      `• *Segmento:* ${servicioTexto}\n` +
      `• *Especificación:* ${datos.mensaje || 'Sin detalles adicionales.'}\n\n` +
      `====================================\n` +
      `📡 *Origen:* Formulario Web Oficial`;

    const urlWhatsapp = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeTexto)}`;

    setTimeout(() => {
      this.isSubmitting = false;
      this.formEnviado = true;
      window.open(urlWhatsapp, '_blank');
      this.leadForm.reset({ servicio: '' });
    }, 800);
  }
}
