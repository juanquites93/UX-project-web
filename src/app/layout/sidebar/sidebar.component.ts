import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="w-[19.8vw] min-w-[19.8vw] h-full border-r border-alarma-border flex flex-col bg-white px-[1.2vw] py-[1.6vh]">
      <!-- Header -->
      <div class="flex items-center gap-[0.8vw] border border-alarma-border rounded-[0.5vw] px-[1vw] py-[1.2vh] mb-[4vh]">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="13" r="8"/>
          <path d="M12 9v4l2 2"/>
          <path d="M5 3 2 6"/>
          <path d="m22 6-3-3"/>
          <path d="M6.38 18.7 4 21"/>
          <path d="M17.64 18.67 20 21"/>
        </svg>
        <span class="text-[1.3vw] font-semibold text-alarma-primary">Alarma Sensorial</span>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-[1.2vh] flex-1">
        @for (item of menuItems; track item.path) {
          <a [routerLink]="item.path"
             routerLinkActive="bg-alarma-accent"
             [routerLinkActiveOptions]="{ exact: item.exact }"
             class="flex items-center px-[1vw] py-[1.2vh] text-[1.1vw] text-alarma-primary border border-alarma-border rounded-[0.5vw] hover:bg-alarma-accent/50 transition-colors">
            {{ item.label }}
          </a>
        }
      </nav>
    </aside>
  `
})
export class SidebarComponent {
  menuItems = [
    { path: '/principal', label: 'Principal', exact: true },
    { path: '/seleccionar-alarma-retos', label: 'Configuración retos', exact: false },
    { path: '/alarmas-respaldo', label: 'Alarmas de respaldo', exact: true },
    { path: '/configuracion-sensorial', label: 'Configuración Sensorial', exact: true },
    { path: '/configuracion-perfiles', label: 'Configuración de perfiles', exact: true },
  ];
}
