import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    loadComponent: () => import('./features/principal/principal.component').then(m => m.PrincipalComponent)
  },
  {
    path: 'seleccionar-alarma-retos',
    loadComponent: () => import('./features/configuracion-retos/selecciona-alarma-retos/selecciona-alarma-retos.component').then(m => m.SeleccionaAlarmaRetosComponent)
  },
  {
    path: 'configuracion-retos',
    loadComponent: () => import('./features/configuracion-retos/configuracion-retos.component').then(m => m.ConfiguracionRetosComponent),
    loadChildren: () => import('./features/configuracion-retos/configuracion-retos.routes').then(m => m.CONFIGURACION_RETOS_ROUTES)
  },
  {
    path: 'alarmas-respaldo',
    loadComponent: () => import('./features/alarmas-respaldo/alarmas-respaldo.component').then(m => m.AlarmasRespaldoComponent)
  },
  {
    path: 'configuracion-sensorial',
    loadComponent: () => import('./features/configuracion-sensorial/configuracion-sensorial.component').then(m => m.ConfiguracionSensorialComponent)
  },
  {
    path: 'configuracion-perfiles',
    loadComponent: () => import('./features/configuracion-perfiles/configuracion-perfiles.component').then(m => m.ConfiguracionPerfilesComponent)
  },
];
