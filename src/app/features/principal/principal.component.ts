import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlarmClockPlus, lucideMessageCirclePlus } from '@ng-icons/lucide';
import { WeekDaysSelectorComponent } from '../../shared/week-days-selector/week-days-selector.component';
import { AlarmasTableComponent, Alarma } from '../../shared/alarmas-table/alarmas-table.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIcon, WeekDaysSelectorComponent, AlarmasTableComponent],
  providers: [provideIcons({ lucideAlarmClockPlus, lucideMessageCirclePlus })],
  template: `
    <div class="px-[4vw] py-[2.1vw] h-full flex gap-[2vw]">
      
      <div class="flex-1 flex flex-col">
        <h2 class="text-[1.8vw] font-bold text-alarma-primary mb-[2vh]">Lista de alarmas</h2>
        
        <!-- Tabla de alarmas -->
        <app-alarmas-table 
          [alarmas]="alarmas()" 
          (toggleAlarma)="toggleAlarma($event)"
        />
        
        <button (click)="openModal()" class="flex items-center justify-center gap-[0.5vw] px-[2vw] py-[1.2vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.1vw] font-medium hover:opacity-90 transition-opacity mx-auto">
          Crear
          <ng-icon hlm name="lucideAlarmClockPlus"/>
        </button>
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

    <!-- Modal para crear alarma -->
    @if (showModal()) {
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" (click)="closeModal()">
        <div class="bg-white rounded-[0.8vw] p-[2vw] w-[40vw] max-h-[100vh] overflow-y-auto flex justify-center" (click)="$event.stopPropagation()">
          <div class="border border-alarma-border bg-white rounded-[0.8vw] p-[2vw] w-[35vw] max-h-[95vh] overflow-y-auto p-[1vw] flex justify-center">
            <div class="p-[2vw] w-[25vw] max-h-[90vh] overflow-y-auto">

          <div class="mb-[2vh]">
            <h2 class="text-[1vw] font-bold text-alarma-primary mb-[0.5vh]">Crear Alarma</h2>
            <p class="text-[0.8vw] text-alarma-muted">Selecciona los días, la hora y el perfil para su alarma</p>
          </div>

          <!-- Formulario -->
          <div class="space-y-[2vh]">
            <!-- Nombre -->
            <div>
              <label class="block text-[0.8vw] font-semibold text-alarma-primary mb-[0.8vh]">
                Nombre <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                [(ngModel)]="formData.nombre"
                [class]="formSubmitted && !formData.nombre ? 'border-red-500' : 'border-alarma-border'"
                class="w-full px-[1vw] py-[1vh] border rounded-[0.5vw] text-[0.8vw] focus:outline-none focus:border-alarma-primary"
                placeholder="Ingresa el nombre de la alarma"
              />
              @if (formSubmitted && !formData.nombre) {
                <p class="text-[0.7vw] text-red-500 mt-[0.5vh]">El nombre es requerido</p>
              }
            </div>

            <!-- Perfil -->
            <div>
              <label class="block text-[0.8vw] font-semibold text-alarma-primary mb-[0.8vh]">
                Perfil <span class="text-red-500">*</span>
              </label>
              <select 
                [(ngModel)]="formData.perfil"
                [class]="formSubmitted && !formData.perfil ? 'border-red-500' : 'border-alarma-border'"
                class="w-full px-[1vw] py-[1vh] border rounded-[0.5vw] text-[0.8vw] focus:outline-none focus:border-alarma-primary"
              >
                <option value="">Selecciona un perfil</option>
                <option value="trabajo">Trabajo</option>
                <option value="personal">Personal</option>
                <option value="ejercicio">Ejercicio</option>
                <option value="medicina">Medicina</option>
                <option value="otro">Otro</option>
              </select>
              @if (formSubmitted && !formData.perfil) {
                <p class="text-[0.7vw] text-red-500 mt-[0.5vh]">El perfil es requerido</p>
              }
            </div>

            <!-- Días activa -->
            <div>
              <label class="block text-[0.8vw] font-semibold text-alarma-primary mb-[0.8vh]">
                Días activa <span class="text-red-500">*</span>
              </label>
              <app-week-days-selector [(selectedDays)]="formData.dias" />
              @if (formSubmitted && formData.dias.length === 0) {
                <p class="text-[0.7vw] text-red-500 mt-[0.5vh]">Debes seleccionar al menos un día</p>
              }
            </div>

            <!-- Hora de la alarma -->
            <div>
              <label class="block text-[0.8vw] font-semibold text-alarma-primary mb-[0.8vh]">
                Hora de la alarma <span class="text-red-500">*</span>
              </label>
              <div>
                <select 
                  [(ngModel)]="formData.ampm"
                  class="px-[1vw] py-[1vh] border border-alarma-border rounded-[0.5vw] text-[0.8vw] focus:outline-none focus:border-alarma-primary"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
                <input 
                  type="text" 
                  [(ngModel)]="formData.hora"
                  [class]="formSubmitted && !formData.hora ? 'border-red-500' : 'border-alarma-border'"
                  class="flex-1 px-[1vw] py-[1vh] border rounded-[0.5vw] text-[0.8vw] focus:outline-none focus:border-alarma-primary"
                  placeholder="Ej: 08:30"
                />
              </div>
              @if (formSubmitted && !formData.hora) {
                <p class="text-[0.7vw] text-red-500 mt-[0.5vh]">La hora es requerida</p>
              }
            </div>
          </div>

          <!-- Botones -->
          <div class="flex justify-end gap-[1vw] mt-[3vh]">
            <button 
              (click)="closeModal()"
              class="px-[2vw] py-[1vh] border border-alarma-border text-alarma-primary rounded-[0.5vw] text-[0.8vw] font-medium hover:bg-alarma-accent transition-colors"
            >
              Cancelar
            </button>
            <button 
              (click)="saveAlarma()"
              class="px-[2vw] py-[1vh] bg-alarma-primary text-white rounded-[0.5vw] text-[0.8vw] font-medium hover:opacity-90 transition-opacity"
            >
              Guardar
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class PrincipalComponent {
  // Control del modal
  showModal = signal(false);
  
  // Control de validación del formulario
  formSubmitted = false;
  
  // Datos del formulario
  formData = {
    nombre: '',
    perfil: '',
    dias: [] as number[],
    hora: '',
    ampm: 'AM'
  };

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

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      nombre: '',
      perfil: '',
      dias: [],
      hora: '',
      ampm: 'AM'
    };
    this.formSubmitted = false;
  }

  saveAlarma() {
    this.formSubmitted = true;
    
    if (!this.formData.nombre || !this.formData.perfil || !this.formData.hora || this.formData.dias.length === 0) {
      return;
    }

    const nuevaAlarma: Alarma = {
      id: this.alarmas().length + 1,
      nombre: this.formData.nombre,
      hora: `${this.formData.hora} ${this.formData.ampm}`,
      dias: [...this.formData.dias],
      activa: true
    };

    this.alarmas.update(alarmas => [...alarmas, nuevaAlarma]);
    this.closeModal();
  }

  toggleAlarma(id: number) {
    this.alarmas.update(alarmas => 
      alarmas.map(alarma => 
        alarma.id === id ? { ...alarma, activa: !alarma.activa } : alarma
      )
    );
  }
}
