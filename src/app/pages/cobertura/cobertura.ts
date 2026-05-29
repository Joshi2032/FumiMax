import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cobertura',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cobertura.html',
  styleUrl: './cobertura.scss'
})
export class Cobertura implements OnInit { 
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Zona de Cobertura Logística | Fumi-Max');
    this.metaService.updateTag({
      name: 'description',
      content: 'Consulte nuestra cobertura de control de plagas en La Piedad, Pénjamo, Degollado, Zamora y zonas del Bajío. Logística especializada para industrias.'
    });
  }
}
