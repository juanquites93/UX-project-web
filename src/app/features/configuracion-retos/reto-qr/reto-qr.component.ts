import { Component, signal } from '@angular/core';
import { ObjetoCardComponent } from './objeto-card/objeto-card.component';
import { RegistrarObjetoComponent } from './registrar-objeto/registrar-objeto.component';
import { InfoBannerComponent } from '../../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-reto-qr',
  standalone: true,
  imports: [ObjetoCardComponent, RegistrarObjetoComponent, InfoBannerComponent],
  template: `
    <div class="flex h-full">
      <!-- Objects List -->
      <div class="flex-1 px-[4vw] py-[2.1vw] overflow-auto flex flex-col justify-between">
        <!-- Title -->
        <div class="flex items-center gap-[0.8vw] border border-alarma-border rounded-[0.5vw] px-[1vw] py-[1.2vh] mb-[2vh] w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="5" height="5" x="3" y="3" rx="1"/>
            <rect width="5" height="5" x="16" y="3" rx="1"/>
            <rect width="5" height="5" x="3" y="16" rx="1"/>
            <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
            <path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/>
            <path d="M3 12h.01"/><path d="M12 3h.01"/>
            <path d="M12 16v.01"/><path d="M16 12h1"/>
            <path d="M21 12v.01"/><path d="M12 21v-1"/>
          </svg>
          <span class="text-[1.6vw] font-semibold text-alarma-primary">Objetos registrados para scan</span>
        </div>

        <!-- Object Cards -->
        <div class="flex flex-col gap-[1.5vh] flex-1 mb-[2vh]">
          <app-objeto-card name="Máquina de afeitar" subtitle="Usado hace 2 días" [(isUsing)]="maquinaUsing" class="flex-1" />
          <app-objeto-card name="Qr personalizado" subtitle="Usado hace 2 días" [(isUsing)]="qrUsing" class="flex-1" />
        </div>

        <!-- New Registration Button -->
        <button (click)="showRegistroPanel.set(!showRegistroPanel())"
                class="flex items-center justify-center gap-[0.5vw] w-full py-[1.2vh] border-2 border-alarma-border rounded-[0.5vw] text-[1.05vw] font-medium hover:bg-gray-50 transition-colors mb-[2vh]">
          Registrar nuevo objeto a escanear
          <svg xmlns="http://www.w3.org/2000/svg" style="width:1.3vw;height:1.3vw" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </button>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-[0.8vw] mb-[1.6vh]">
          <button class="px-[1.6vw] py-[1vh] border-2 border-alarma-primary text-alarma-primary rounded-[0.5vw] text-[1.05vw] font-medium hover:bg-alarma-accent transition-colors">
            Probar reto
          </button>
          <button class="px-[1.6vw] py-[1vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.05vw] font-medium hover:opacity-90 transition-opacity">
            Guardar
          </button>
        </div>
        <app-info-banner text="Para probar la configuración ten en tu mano el celular con tu aplicación abierta" />
      </div>

      <!-- Registration Panel (Screen 4) -->
      @if (showRegistroPanel()) {
        <app-registrar-objeto (close)="showRegistroPanel.set(false)" />
      }
    </div>
  `
})
export class RetoQrComponent {
  showRegistroPanel = signal(false);
  maquinaUsing = signal(true);
  qrUsing = signal(false);
}
