import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-banner',
  standalone: true,
  template: `
    <div class="flex items-start gap-[0.5vw] text-[0.9vw] text-alarma-muted mt-[1vh]">
      <svg xmlns="http://www.w3.org/2000/svg" style="width:1.3vw;height:1.3vw" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="shrink-0 mt-[0.2vh]">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
      <span>{{ text() }}</span>
    </div>
  `
})
export class InfoBannerComponent {
  text = input('');
}
