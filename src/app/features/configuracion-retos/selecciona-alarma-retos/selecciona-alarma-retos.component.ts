import { Component, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideAlarmClockPlus, lucideMessageCirclePlus } from '@ng-icons/lucide';
import { Alarma, AlarmasTableComponent } from '../../../shared/alarmas-table/alarmas-table.component';

@Component({
  selector: 'app-selecciona-alarma-retos',
  standalone: true,
  imports: [AlarmasTableComponent],
  providers: [provideIcons({ lucideAlarmClockPlus, lucideMessageCirclePlus })],
  template: `
  
  <div class="flex items-start gap-[0.8vw] p-[2.1vw] w-[80vw] flex justify-center">
    <div class="border border-alarma-border bg-white rounded-[0.8vw] p-[2vw] w-[60vw] overflow-y-auto p-[1vw] flex justify-center">
      <div class="flex-1 flex flex-col">
        <h2 class="text-[1.8vw] font-bold text-alarma-primary mb-[2vh] flex justify-center">Selecciona la alarma a configurar retos</h2>
        
        <!-- Tabla de alarmas -->
        <app-alarmas-table 
          [alarmas]="alarmas()" 
          [modificable]="false"
        />
      </div>
    </div>
  </div>
  `
})
export class SeleccionaAlarmaRetosComponent {
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
}
