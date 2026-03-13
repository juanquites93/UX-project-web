import { Component } from '@angular/core';

@Component({
  selector: 'app-intermedia-retos',
  standalone: true,
  template: `
    <div class="flex items-start gap-[0.8vw] p-[2.1vw]">
      <svg xmlns="http://www.w3.org/2000/svg" style="width:1.8vw;height:1.8vw" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="shrink-0 text-alarma-primary mt-[0.4vh]">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
      <p class="text-[1.2vw] text-alarma-primary leading-relaxed font-semibold">
        Selecciona uno de los botones a tu izquierda para acceder al menú de
        configuración de cada reto que sonará cuando suene tu alarma
      </p>
    </div>
  `
})
export class IntermediaRetosComponent {}
