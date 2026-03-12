import { Component, input, model, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-challenge-card',
  standalone: true,
  template: `
    <div class="border border-alarma-border rounded-[0.5vw] p-[1vw] flex flex-col gap-[0.8vw] cursor-pointer hover:border-alarma-primary transition-colors"
         [class.border-alarma-primary]="active()"
         (click)="onCardClick()">
      <div class="flex items-center gap-[0.8vw]">
        <div class="text-alarma-primary" [innerHTML]="safeIcon()"></div>
        <span class="text-[1.2vw] font-medium text-alarma-primary">{{ title() }}</span>
      </div>
      <div class="flex justify-end">
        <!-- Toggle Switch -->
        <button (click)="toggleSwitch($event)"
                class="relative w-[3.2vw] h-[1.6vw] rounded-full bg-alarma-toggle-track transition-colors">
          <div class="absolute top-[0.15vw] w-[1.3vw] h-[1.3vw] rounded-full shadow bg-alarma-primary transition-all"
               [style.transform]="checked() ? 'translateX(1.75vw)' : 'translateX(0.15vw)'">
          </div>
        </button>
      </div>
    </div>
  `
})
export class ChallengeCardComponent {
  private sanitizer = inject(DomSanitizer);

  title = input('');
  icon = input('');
  checked = model(true);
  active = input(false);

  safeIcon = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.icon()));

  onCardClick() {}

  toggleSwitch(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.checked.update(v => !v);
  }
}
