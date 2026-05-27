import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'MAXIFUM DEL BAJÍO | Control Profesional de Plagas',
		loadComponent: () => import('./pages/landing').then(m => m.LandingComponent)
	},
	{
		path: 'servicios',
		title: 'Nuestros Servicios | MAXIFUM',
		loadComponent: () => import('./pages/servicios/servicios').then(m => m.Servicios)
	},
	{
		path: 'plagas',
		title: 'Catálogo de Plagas | MAXIFUM',
		loadComponent: () => import('./pages/plagas/plagas').then(m => m.Plagas)
	},
	{
		path: 'proceso',
		title: 'Nuestro Proceso | MAXIFUM',
		loadComponent: () => import('./pages/proceso/proceso').then(m => m.Proceso)
	},
	{
		path: 'cobertura',
		title: 'Zonas de Cobertura | MAXIFUM',
		loadComponent: () => import('./pages/cobertura/cobertura').then(m => m.CoberturaComponent)
	},
	{
		path: 'faq',
		title: 'Preguntas Frecuentes | MAXIFUM',
		loadComponent: () => import('./pages/faq/faq').then(m => m.FaqComponent)
	},
	{
		path: 'contacto',
		title: 'Contacto y Cotización | MAXIFUM',
		loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
