import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class Nosotros {
  activeTab = signal<'mision' | 'vision' | 'valores'>('mision');

  setTab(tab: 'mision' | 'vision' | 'valores') {
    this.activeTab.set(tab);
  }
}
