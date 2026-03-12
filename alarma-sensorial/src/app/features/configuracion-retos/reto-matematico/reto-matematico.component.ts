import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/counter/counter.component';
import { InfoBannerComponent } from '../../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-reto-matematico',
  standalone: true,
  imports: [CounterComponent, InfoBannerComponent],
  template: `
    <div class="px-[4vw] py-[2.1vw] h-full flex flex-col">
      <!-- Title -->
      <div class="flex items-center gap-[0.8vw] border border-alarma-border rounded-[0.5vw] px-[1vw] py-[1.2vh] mb-[2vh] w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"/>
          <line x1="8" x2="16" y1="6" y2="6"/>
          <line x1="16" x2="16" y1="14" y2="18"/>
          <path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/>
          <path d="M12 14h.01"/><path d="M8 14h.01"/>
          <path d="M12 18h.01"/><path d="M8 18h.01"/>
        </svg>
        <span class="text-[1.6vw] font-semibold text-alarma-primary">Reto matemático</span>
      </div>

      <!-- Rest of content distributed evenly -->
      <div class="flex-1 flex flex-col justify-evenly">
        <!-- Difficulty Level -->
        <div>
          <h3 class="text-[1.3vw] font-semibold mb-[1.6vh]">Nivel de dificultad</h3>
          <div class="flex border border-alarma-border rounded-[0.5vw] overflow-hidden w-fit mx-auto">
            @for (level of difficultyLevels; track level) {
              <button (click)="selectedDifficulty.set(level)"
                      class="px-[1.6vw] py-[0.8vh] text-[1.05vw] font-medium transition-colors border-r border-alarma-border last:border-r-0"
                      [class.bg-alarma-accent]="selectedDifficulty() === level"
                      [class.text-alarma-primary]="selectedDifficulty() === level"
                      [class.bg-white]="selectedDifficulty() !== level">
                {{ level }}
              </button>
            }
          </div>
        </div>

        <div class="flex gap-[6.0vw]">
          <!-- Problem Count -->
          <div>
            <h3 class="text-[1.3vw] font-semibold mb-[1.6vh]">Cantidad de problemas</h3>
            <app-counter [(value)]="problemCount" />
          </div>

          <!-- Complexity -->
          <div>
            <h3 class="text-[1.3vw] font-semibold mb-[1.6vh]">Complejidad</h3>
            <div class="flex flex-col gap-[0.5vw]">
              @for (op of operations; track op.name) {
                <label class="flex items-center gap-[0.5vw] border border-alarma-border rounded px-[1.5vw] py-[0.8vh] min-w-[14vw] cursor-pointer hover:bg-gray-50 transition-colors">
                  <span class="flex-1 text-[1.05vw]">{{ op.name }}</span>
                  <button (click)="op.checked = !op.checked"
                          class="w-[1.6vw] h-[1.6vw] rounded-full border-2 flex items-center justify-center transition-colors"
                          [class.border-alarma-primary]="op.checked"
                          [class.bg-white]="true">
                    @if (op.checked) {
                      <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                           stroke="#31111d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    }
                  </button>
                </label>
              }
            </div>
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
  `
})
export class RetoMatematicoComponent {
  difficultyLevels = ['FÁCIL', 'MEDIO', 'DIFÍCIL'];
  selectedDifficulty = signal('MEDIO');
  problemCount = signal(3);
  operations = [
    { name: 'Multiplicación', checked: true },
    { name: 'División', checked: true },
    { name: 'Suma', checked: true },
    { name: 'Resta', checked: true },
  ];
}
