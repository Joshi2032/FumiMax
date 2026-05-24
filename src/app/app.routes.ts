import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/hero/hero').then(m => m.Hero) },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios').then(m => m.Servicios) },
  { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros').then(m => m.Nosotros) },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto) },
  { path: 'cobertura', loadComponent: () => import('./pages/cobertura/cobertura').then(m => m.Cobertura) }
];
