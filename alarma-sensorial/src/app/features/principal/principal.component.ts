import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowDownUp, lucideAlarmClockPlus, lucideMessageCirclePlus } from '@ng-icons/lucide';
import { WeekDaysSelectorComponent } from '../../shared/week-days-selector/week-days-selector.component';

interface Alarma {
  id: number;
  hora: string;
  nombre: string;
  dias: number[];
  activa: boolean;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, NgIcon, WeekDaysSelectorComponent],
  providers: [provideIcons({ lucideArrowDownUp, lucideAlarmClockPlus, lucideMessageCirclePlus })],
  template: `
    <div class="px-[4vw] py-[2.1vw] h-full flex gap-[2vw]">
      
      <!-- Primera sección: Lista de alarmas -->
      <div class="flex-1 flex flex-col">
        <h2 class="text-[1.8vw] font-bold text-alarma-primary mb-[2vh]">Lista de alarmas</h2>
        <div class="flex-1 overflow-auto border border-alarma-border rounded-[0.5vw] mb-[2vh] p-[1vw]">
          <!-- Tabla de alarmas -->
        <div class="flex-1 overflow-auto border border-alarma-border rounded-[0.5vw] mb-[2vh]">
          <table class="w-full">
            <thead class="sticky top-0">
              <tr>
                <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">Hora <ng-icon hlm name="lucideArrowDownUp"/></th>
                <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">Nombre <ng-icon hlm name="lucideArrowDownUp"/></th>
                <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">Días <ng-icon hlm name="lucideArrowDownUp"/></th>
                <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">Activa <ng-icon hlm name="lucideArrowDownUp"/></th>
              </tr>
            </thead>
            <tbody>
              @for (alarma of alarmas(); track alarma.id) {
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="px-[1vw] py-[1.2vh] text-[0.9vw] border-b border-gray-200">{{ alarma.hora }}</td>
                  <td class="px-[1vw] py-[1.2vh] text-[0.9vw] border-b border-gray-200">{{ alarma.nombre }}</td>
                  <td class="px-[1vw] py-[1.2vh] border-b border-gray-200">
                    <app-week-days-selector [(selectedDays)]="alarma.dias" />
                  </td>
                  <td class="px-[1vw] py-[1.2vh] border-b border-gray-200">
                    <button (click)="toggleAlarma(alarma.id)"
                      [class]="alarma.activa ? 'bg-alarma-toggle-track' : 'bg-gray-300'"
                      class="relative w-[3.2vw] h-[1.6vw] rounded-full transition-colors">
                      <div class="absolute top-[0.15vw] w-[1.3vw] h-[1.3vw] rounded-full shadow  transition-all"
                      [class]="alarma.activa ? 'bg-alarma-primary' : 'bg-white'"
                      [style.transform]="alarma.activa ? 'translateX(1.75vw)' : 'translateX(0.15vw)'">
                      </div>
                    </button>

                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        
        <div class="flex justify-end gap-[0.5vw] mb-[2vh]">
          <button disabled class="px-[1.5vw] py-[0.8vh] border border-alarma-border text-alarma-primary rounded-[0.5vw] text-[0.8vw] font-medium hover:bg-alarma-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
            Anterior
          </button>
          <button disabled class="px-[1.5vw] py-[0.8vh] border border-alarma-border text-alarma-primary rounded-[0.5vw] text-[0.8vw] font-medium hover:bg-alarma-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
            Siguiente
          </button>
        </div>
        
        <button class="flex items-center justify-center gap-[0.5vw] px-[2vw] py-[1.2vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.1vw] font-medium hover:opacity-90 transition-opacity mx-auto">
          Crear
          <ng-icon hlm name="lucideAlarmClockPlus"/>
        </button>
        </div>
      </div>

      <!-- Mensajes -->
      <div class="w-[20vw] flex flex-col">
        <h2 class="text-[1.8vw] font-bold text-alarma-primary mb-[2vh]">Mensajes</h2>
        
        <div class="flex-1 overflow-auto border border-alarma-border rounded-[0.5vw] mb-[2vh] p-[1vw] space-y-[1.5vh]">
          @for (mensaje of mensajes(); track mensaje) {
            <div class="border border-alarma-border rounded-[0.5vw] p-[1.2vw] bg-white hover:shadow-md transition-shadow">
              <p class="text-[0.95vw] text-alarma-muted">{{ mensaje }}</p>
            </div>
          }
        </div>
        
        <!-- Botón Agregar -->
        <button class="flex items-center gap-[0.5vw] px-[2vw] py-[1.2vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.1vw] font-medium hover:opacity-90 transition-opacity w-fit">
          Agregar
          <ng-icon hlm name="lucideMessageCirclePlus"/>
        </button>
      </div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class PrincipalComponent {
  // Datos de prueba para alarmas
  alarmas = signal<Alarma[]>([
    { id: 1, hora: '5:30 AM', nombre: 'Alarma trabajo', dias: [1, 2, 3, 4, 5], activa: true },
    { id: 2, hora: '10:00 AM', nombre: 'Alarma fin de semana', dias: [6, 7], activa: true },
    { id: 3, hora: '9:00 AM', nombre: 'Tomar medicina', dias: [1, 2, 3, 4, 5], activa: false },
    { id: 4, hora: '2:30 PM', nombre: 'Cita almuerzo', dias: [2, 4, 5], activa: true },
    { id: 5, hora: '5:00 PM', nombre: 'Salida perro', dias: [1, 2, 3, 4, 5], activa: true },
    { id: 6, hora: '9:00 PM', nombre: 'Test', dias: [1, 2, 3, 4, 5], activa: false },
    { id: 7, hora: '6:30 AM', nombre: 'Alarma de prueba', dias: [1, 2, 3, 4, 5], activa: true },
  ]);

  // Datos de prueba para mensajes
  mensajes = signal<string[]>([
    'La mejor manera de predecir el futuro es crearlo.',
    'El éxito es la suma de tu esfuerzo.',
    'Mensaje motivacional de prueba...',
    'Cada día es una nueva oportunidad para mejorar.',
  ]);

  toggleAlarma(id: number) {
    this.alarmas.update(alarmas => 
      alarmas.map(alarma => 
        alarma.id === id ? { ...alarma, activa: !alarma.activa } : alarma
      )
    );
  }
}
