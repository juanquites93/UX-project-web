import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DayOfWeek {
  id: number;
  label: string;
  value: string;
}

@Component({
  selector: 'app-week-days-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex">
      @for (day of days; track day.id) {
        <button
          (click)="toggleDay(day.id)"
          [class]="isSelected(day.id) ? 'bg-alarma-accent text-muted' : 'bg-white text-alarma-muted'"
          class="w-[2.5vw] h-[2.5vw] rounded-[0.3vw] text-[0.9vw] hover:opacity-80 transition-all flex items-center justify-center"
        >
          {{ day.label }}
        </button>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class WeekDaysSelectorComponent {
  selectedDays = model<number[]>([]);
  modificable = model(true);

  days: DayOfWeek[] = [
    { id: 1, label: 'Lu', value: 'Lunes' },
    { id: 2, label: 'Ma', value: 'Martes' },
    { id: 3, label: 'Mi', value: 'Miércoles' },
    { id: 4, label: 'Ju', value: 'Jueves' },
    { id: 5, label: 'Vi', value: 'Viernes' },
    { id: 6, label: 'Sa', value: 'Sábado' },
    { id: 7, label: 'Do', value: 'Domingo' }
  ];

  toggleDay(dayId: number) {
    if (!this.modificable()) return;
    const currentSelected = this.selectedDays();
    const index = currentSelected.indexOf(dayId);
    
    if (index > -1) {
      this.selectedDays.set(currentSelected.filter(id => id !== dayId));
    } else {
      this.selectedDays.set([...currentSelected, dayId]);
    }
  }

  isSelected(dayId: number): boolean {
    return this.selectedDays().includes(dayId);
  }
}
