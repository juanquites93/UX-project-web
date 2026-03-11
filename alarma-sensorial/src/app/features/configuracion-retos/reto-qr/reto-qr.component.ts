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
      <div class="flex-1 p-[2.1vw] overflow-auto">
        <!-- Title -->
        <div class="flex items-center gap-[0.8vw] border border-alarma-border rounded-[0.5vw] px-[1vw] py-[1.2vh] mb-[3.3vh] w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span class="text-[1.6vw] font-semibold text-alarma-primary">Objetos registrados</span>
        </div>

        <!-- Object Cards -->
        <div class="flex flex-col gap-[1vh] mb-[2.4vh]">
          <app-objeto-card name="Máquina de afeitar" subtitle="Usado hace 2 días" [(isUsing)]="maquinaUsing" />
          <app-objeto-card name="Qr personalizado" subtitle="Usado hace 2 días" [(isUsing)]="qrUsing" />
        </div>

        <!-- New Registration Button -->
        <button (click)="showRegistroPanel.set(!showRegistroPanel())"
                class="flex items-center justify-center gap-[0.5vw] w-full py-[1.2vh] border-2 border-alarma-border rounded-full text-[1.05vw] font-medium hover:bg-gray-50 transition-colors mb-[2.4vh]">
          @if (showRegistroPanel()) {
            Cerrar registro
          } @else {
            Nuevo registro
          }
          <svg xmlns="http://www.w3.org/2000/svg" style="width:1.3vw;height:1.3vw" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </button>

        <!-- Action Buttons -->
        <div class="flex gap-[0.8vw] mb-[1.6vh]">
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
