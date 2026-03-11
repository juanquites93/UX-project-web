import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-objeto',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="w-[21.2vw] min-w-[21.2vw] border-l border-alarma-border p-[1.6vw] flex flex-col gap-[2vh] h-full overflow-auto">
      <h2 class="text-[1.3vw] font-bold text-alarma-primary border-b border-alarma-border pb-[1.2vh]">Registrar nuevo objeto</h2>

      <!-- Nombre -->
      <div>
        <label class="block text-[0.9vw] font-medium mb-[0.6vh]">Nombre</label>
        <input type="text"
               [(ngModel)]="nombre"
               placeholder="Ej. Taza de café"
               class="w-full px-[0.8vw] py-[0.8vh] border border-alarma-border rounded-[0.5vw] text-[0.9vw] focus:outline-none focus:ring-2 focus:ring-alarma-primary/30 focus:border-alarma-primary" />
      </div>

      <!-- Tipo de objeto -->
      <div>
        <label class="block text-[0.9vw] font-medium mb-[0.6vh]">Tipo de objeto</label>
        <div class="border border-alarma-border rounded-[0.5vw] overflow-hidden">
          @for (tipo of tiposObjeto; track tipo) {
            <button (click)="selectedTipo.set(tipo)"
                    class="flex items-center gap-[0.5vw] w-full px-[0.8vw] py-[0.8vh] text-[0.9vw] text-left border-b border-alarma-border last:border-b-0 hover:bg-gray-50 transition-colors"
                    [class.font-medium]="selectedTipo() === tipo">
              @if (selectedTipo() === tipo) {
                <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
                     stroke="#31111d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              }
              {{ tipo }}
            </button>
          }
        </div>
      </div>

      <!-- Imagen -->
      <div>
        <label class="block text-[0.9vw] font-medium mb-[0.6vh]">Imagen</label>
        <div class="w-full h-[16.3vh] border border-alarma-border rounded-[0.5vw] flex items-center justify-center bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:2.6vw;height:2.6vw" viewBox="0 0 24 24" fill="none"
               stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20"/>
            <path d="M2 12h20"/>
          </svg>
        </div>
      </div>

      <!-- Buttons -->
      <button class="w-full py-[1vh] bg-alarma-primary text-white rounded-[0.5vw] text-[1.05vw] font-medium hover:opacity-90 transition-opacity">
        Subir
      </button>
      <button (click)="close.emit()"
              class="w-full py-[1vh] border border-alarma-border rounded-[0.5vw] text-[1.05vw] font-medium hover:bg-gray-50 transition-colors">
        Cancelar
      </button>

      <div class="flex items-start gap-[0.5vw] text-[0.8vw] text-alarma-muted">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mt-[0.2vh]">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
        <span>Solo se permiten objetos que aparezcan dentro del tipo de objetos y códigos qr</span>
      </div>

      <button class="flex items-center justify-center gap-[0.5vw] w-full py-[1vh] border border-alarma-border rounded-[0.5vw] text-[1.05vw] font-medium hover:bg-gray-50 transition-colors">
        Guardar
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.05vw;height:1.05vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
          <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>
          <path d="M7 3v4a1 1 0 0 0 1 1h7"/>
        </svg>
      </button>
    </div>
  `
})
export class RegistrarObjetoComponent {
  close = output();
  nombre = '';
  selectedTipo = signal('Utensilio de cocina');
  tiposObjeto = ['Utensilio de cocina', 'Aseo', 'Código QR'];
}
