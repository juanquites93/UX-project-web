import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-challenge-card',
  standalone: true,
  template: `
    <div class="border border-alarma-border rounded-[0.5vw] p-[1vw] flex flex-col gap-[0.8vw] cursor-pointer hover:border-alarma-primary transition-colors"
         [class.border-alarma-primary]="active()"
         (click)="onCardClick()">
      <div class="flex items-center gap-[0.8vw]">
        <div class="text-alarma-primary" [innerHTML]="icon()"></div>
        <span class="text-[1.2vw] font-medium text-alarma-primary">{{ title() }}</span>
      </div>
      <div class="flex justify-end">
        <!-- Toggle Switch -->
        <button (click)="toggleSwitch($event)"
                class="relative w-[3.2vw] h-[1.6vw] rounded-full transition-colors"
                [class.bg-alarma-toggle-track]="checked()"
                [class.bg-gray-300]="!checked()">
          <div class="absolute top-[0.15vw] w-[1.3vw] h-[1.3vw] rounded-full shadow transition-transform"
               [class]="checked() ? 'translate-x-[1.75vw] bg-alarma-primary' : 'translate-x-[0.15vw] bg-gray-400'">
          </div>
        </button>
      </div>
    </div>
  `
})
export class ChallengeCardComponent {
  title = input('');
  icon = input('');
  checked = model(true);
  active = input(false);

  onCardClick() {}

  toggleSwitch(event: Event) {
    event.stopPropagation();
    this.checked.update(v => !v);
  }
}
