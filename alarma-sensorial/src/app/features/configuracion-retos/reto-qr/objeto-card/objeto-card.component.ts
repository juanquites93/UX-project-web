import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-objeto-card',
  standalone: true,
  template: `
    <div class="border border-alarma-border rounded-[0.5vw] p-[1.3vw]">
      <h3 class="text-[1.3vw] font-bold text-alarma-primary">{{ name() }}</h3>
      <p class="text-[0.9vw] text-alarma-muted mb-[1.2vh]">{{ subtitle() }}</p>

      <!-- Image Slot -->
      <div class="w-full h-[11.4vh] border-2 border-dashed border-alarma-border rounded-[0.5vw] flex items-center justify-center text-alarma-muted text-[0.9vw] mb-[1.6vh]">
        Slot
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-[0.8vw]">
        @if (isUsing()) {
          <button class="flex items-center gap-[0.5vw] px-[1vw] py-[0.8vh] border border-alarma-border rounded-[0.5vw] text-[0.9vw] hover:bg-gray-50 transition-colors">
            Estás usando este
            <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="m9 11 3 3L22 4"/>
            </svg>
          </button>
          <button (click)="isUsing.set(false)"
                  class="flex items-center gap-[0.5vw] px-[1vw] py-[0.8vh] bg-alarma-primary text-white rounded-[0.5vw] text-[0.9vw] hover:opacity-90 transition-opacity">
            Dejar de Usar
            <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m15 9-6 6"/>
              <path d="m9 9 6 6"/>
            </svg>
          </button>
        } @else {
          <button class="flex items-center gap-[0.5vw] px-[1vw] py-[0.8vh] border border-alarma-border rounded-[0.5vw] text-[0.9vw] hover:bg-gray-50 transition-colors">
            No lo estás utilizando
            <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m15 9-6 6"/>
              <path d="m9 9 6 6"/>
            </svg>
          </button>
          <button (click)="isUsing.set(true)"
                  class="flex items-center gap-[0.5vw] px-[1vw] py-[0.8vh] bg-alarma-primary text-white rounded-[0.5vw] text-[0.9vw] hover:opacity-90 transition-opacity">
            Usar
            <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="m9 11 3 3L22 4"/>
            </svg>
          </button>
        }
      </div>
    </div>
  `
})
export class ObjetoCardComponent {
  name = input('');
  subtitle = input('');
  isUsing = model(false);
}
