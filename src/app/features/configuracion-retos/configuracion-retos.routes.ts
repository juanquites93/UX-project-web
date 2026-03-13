import { Routes } from '@angular/router';
import { IntermediaRetosComponent } from './intermedia-retos/intermedia-retos.component';
import { RetoMatematicoComponent } from './reto-matematico/reto-matematico.component';
import { RetoCaminarComponent } from './reto-caminar/reto-caminar.component';
import { RetoQrComponent } from './reto-qr/reto-qr.component';

export const CONFIGURACION_RETOS_ROUTES: Routes = [
  { path: '', component: IntermediaRetosComponent },
  { path: 'matematico', component: RetoMatematicoComponent },
  { path: 'caminar', component: RetoCaminarComponent },
  { path: 'qr', component: RetoQrComponent },
];
