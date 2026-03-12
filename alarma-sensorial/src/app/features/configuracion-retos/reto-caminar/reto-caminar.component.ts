import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../../../shared/counter/counter.component';
import { InfoBannerComponent } from '../../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-reto-caminar',
  standalone: true,
  imports: [FormsModule, CounterComponent, InfoBannerComponent],
  template: `
    <div class="px-[4vw] py-[2.1vw] h-full flex flex-col">
      <!-- Title -->
      <div class="flex items-center gap-[0.8vw] border border-alarma-border rounded-[0.5vw] px-[1vw] py-[1.2vh] mb-[2vh] w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="5" r="1"/>
          <path d="m9 20 3-6 3 6"/>
          <path d="m6 8 6 2 6-2"/>
          <path d="M12 10v4"/>
        </svg>
        <span class="text-[1.6vw] font-semibold text-alarma-primary">Reto caminar pasos</span>
      </div>

      <!-- Rest of content distributed evenly -->
      <div class="flex-1 flex flex-col justify-evenly">
        <!-- Walk to deactivate -->
        <div>
          <h3 class="text-[1.3vw] font-bold mb-[0.8vh]">Camina para desactivar</h3>
          <p class="text-[0.9vw] text-alarma-muted">Completa los pasos requeridos dentro del tiempo límite</p>
        </div>

        <!-- Steps Counter -->
        <div>
          <h4 class="text-[1.2vw] font-semibold mb-[1.2vh]">Pasos</h4>
          <app-counter [(value)]="stepsCount" />
        </div>

        <!-- Time Limit -->
        <div>
          <h3 class="text-[1.3vw] font-bold mb-[0.8vh]">Tiempo límite</h3>
          <p class="text-[0.9vw] text-alarma-muted">Si te pasas de este tiempo sin cumplir el reto se activará tu alarma de respaldo</p>
        </div>

        <!-- Slider -->
        <div>
          <div class="text-center mb-[0.8vh] text-[1.05vw] font-medium">{{ sliderValue() }} segundos</div>
          <input type="range"
                 [min]="0" [max]="100" [step]="1"
                 [ngModel]="sliderValue()"
                 (ngModelChange)="sliderValue.set($event)"
                 [style.--slider-progress]="sliderValue() + '%'"
                 class="w-full h-[0.5vh] rounded-[0.5vw] appearance-none cursor-pointer slider-custom" />
          <div class="flex justify-between text-[0.9vw] text-alarma-muted mt-[0.4vh]">
            <span>0 segundos</span>
            <span>100 segundos</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-[0.8vw]">
          <button class="px-[1.6vw] py-[1vh] border-2 border-alarma-primary text-alarma-primary rounded-[0.5vw] text-[1.05vw] font-medium hover:bg-alarma-accent transition-colors">
            Probar reto
          </button>
          <button class="px-[1.6vw] py-[1vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.05vw] font-medium hover:opacity-90 transition-opacity">
            Guardar
          </button>
        </div>

        <app-info-banner text="Para probar la configuración ten en tu mano el celular con tu aplicación abierta" />
      </div>
    </div>
  `,
  styles: [`
    .slider-custom {
      background: linear-gradient(to right, #31111d var(--slider-progress, 30%), #f1f5f9 var(--slider-progress, 30%));
    }
    .slider-custom::-webkit-slider-thumb {
      appearance: none;
      width: 1.3vw;
      height: 1.3vw;
      border-radius: 50%;
      background: white;
      border: 0.2vw solid #31111d;
      cursor: pointer;
    }
    .slider-custom::-moz-range-thumb {
      width: 1.3vw;
      height: 1.3vw;
      border-radius: 50%;
      background: white;
      border: 0.2vw solid #31111d;
      cursor: pointer;
    }
  `]
})
export class RetoCaminarComponent {
  stepsCount = signal(20);
  sliderValue = signal(30);
}
