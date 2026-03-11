import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="flex items-center gap-[0.5vw]">
      <button (click)="decrement()"
              class="w-[2.6vw] h-[2.6vw] rounded-full border-2 border-alarma-primary flex items-center justify-center text-alarma-primary hover:bg-alarma-accent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.3vw;height:1.3vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/>
        </svg>
      </button>
      <div class="w-[3.5vw] h-[2.6vw] border-2 border-alarma-primary rounded flex items-center justify-center text-[1.3vw] font-semibold">
        {{ value() }}
      </div>
      <button (click)="increment()"
              class="w-[2.6vw] h-[2.6vw] rounded-full border-2 border-alarma-primary flex items-center justify-center text-alarma-primary hover:bg-alarma-accent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.3vw;height:1.3vw" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/>
          <path d="M12 5v14"/>
        </svg>
      </button>
    </div>
  `
})
export class CounterComponent {
  value = model(0);

  increment() {
    this.value.update(v => v + 1);
  }

  decrement() {
    this.value.update(v => Math.max(0, v - 1));
  }
}
