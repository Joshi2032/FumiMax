import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/landing').then(m => m.LandingComponent)
	},
	{
		path: 'cobertura',
		loadComponent: () => import('./pages/cobertura/cobertura').then(m => m.Cobertura)
	}
];
