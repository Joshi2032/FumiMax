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
		path: 'nosotros',
		title: 'Quiénes Somos | MAXIFUM',
		loadComponent: () => import('./pages/nosotros/nosotros').then(m => m.Nosotros)
	},
	{
		path: 'cobertura',
		title: 'Zonas de Cobertura | MAXIFUM',
		loadComponent: () => import('./pages/cobertura/cobertura').then(m => m.Cobertura)
	},
	{
		path: 'faq',
		title: 'Preguntas Frecuentes | MAXIFUM',
		loadComponent: () => import('./pages/faq/faq').then(m => m.Faq)
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
