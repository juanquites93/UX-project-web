import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowDownUp } from '@ng-icons/lucide';
import { WeekDaysSelectorComponent } from '../week-days-selector/week-days-selector.component';

export interface Alarma {
  id: number;
  hora: string;
  nombre: string;
  dias: number[];
  activa: boolean;
}

@Component({
  selector: 'app-alarmas-table',
  standalone: true,
  imports: [CommonModule, NgIcon, WeekDaysSelectorComponent],
  providers: [provideIcons({ lucideArrowDownUp })],
  template: `
    <div class="flex-1 overflow-auto border border-alarma-border rounded-[0.5vw] mb-[2vh]">
      <table class="w-full">
        <thead class="sticky top-0 bg-white">
          <tr>
            <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">
              Hora <ng-icon hlm name="lucideArrowDownUp"/>
            </th>
            <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">
              Nombre <ng-icon hlm name="lucideArrowDownUp"/>
            </th>
            <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">
              Días <ng-icon hlm name="lucideArrowDownUp"/>
            </th>
            <th class="text-left px-[1vw] py-[1.5vh] text-[1.0vw] font-semibold text-alarma-primary border-b border-alarma-border">
              Activa <ng-icon hlm name="lucideArrowDownUp"/>
            </th>
          </tr>
        </thead>
        <tbody>
          @for (alarma of alarmas; track alarma.id) {
            <tr (click)="onRowClick(alarma.id)" class="hover:bg-gray-50 transition-colors cursor-pointer">
              <td class="px-[1vw] py-[1.2vh] text-[0.9vw] border-b border-gray-200">{{ alarma.hora }}</td>
              <td class="px-[1vw] py-[1.2vh] text-[0.9vw] border-b border-gray-200">{{ alarma.nombre }}</td>
              <td class="px-[1vw] py-[1.2vh] border-b border-gray-200" (click)="$event.stopPropagation()">
                <app-week-days-selector [(selectedDays)]="alarma.dias" [modificable]="modificable" />
              </td>
              <td class="px-[1vw] py-[1.2vh] border-b border-gray-200" (click)="$event.stopPropagation()">
                <button (click)="onToggleAlarma(alarma.id)"
                  [class]="alarma.activa ? 'bg-alarma-toggle-track' : 'bg-gray-300'"
                  class="relative w-[3.2vw] h-[1.6vw] rounded-full transition-colors">
                  <div class="absolute top-[0.15vw] w-[1.3vw] h-[1.3vw] rounded-full shadow transition-all"
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
    
    <!-- Botones de navegación -->
    <div class="flex justify-end gap-[0.5vw] mb-[2vh]">
      <button 
        [disabled]="true"
        class="px-[1.5vw] py-[0.8vh] border border-alarma-border text-alarma-primary rounded-[0.5vw] text-[0.8vw] font-medium hover:bg-alarma-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
        Anterior
      </button>
      <button 
        [disabled]="true"
        class="px-[1.5vw] py-[0.8vh] border border-alarma-border text-alarma-primary rounded-[0.5vw] text-[0.8vw] font-medium hover:bg-alarma-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
        Siguiente
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class AlarmasTableComponent {
  private router = inject(Router);
  
  @Input() alarmas: Alarma[] = [];
  @Input() modificable: boolean = true;
  @Output() toggleAlarma = new EventEmitter<number>();

  onRowClick(alarmaId: number) {
    this.router.navigate(['/configuracion-retos']);
  }

  onToggleAlarma(id: number) {
    this.toggleAlarma.emit(id);
  }
}
