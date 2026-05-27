import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  // Reemplaza este número por el teléfono de Fumi-Max (con código de país, sin espacios ni el signo +)
  private readonly WHATSAPP_NUMBER = '3521887541';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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

    // 1. Extraer los datos limpios del formulario reactivo
    const datos = this.leadForm.value;

    // 2. Mapear el valor del selector a un texto legible para el mensaje
    const serviciosMapeados: { [key: string]: string } = {
      residencial: 'Fumigación Residencial 🏠',
      comercial: 'Control Comercial / Negocios 🏢',
      industrial: 'Control de Plagas Industrial 🏭'
    };
    const servicioTexto = serviciosMapeados[datos.servicio] || datos.servicio;

    // 3. Estructurar el cuerpo del mensaje de forma técnica e institucional
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

    // 4. Codificar el texto para que sea válido dentro de una URL de WhatsApp
    const urlWhatsapp = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeTexto)}`;

    // 5. Simular procesamiento local, activar alerta de éxito y redirigir
    setTimeout(() => {
      this.isSubmitting = false;
      this.formEnviado = true;

      // Abre WhatsApp en una pestaña nueva
      window.open(urlWhatsapp, '_blank');

      // Resetea el formulario limpiando los selectores
      this.leadForm.reset({
        servicio: ''
      });
    }, 800);
  }
}
