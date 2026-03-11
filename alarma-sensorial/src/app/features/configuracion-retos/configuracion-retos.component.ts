import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';

@Component({
  selector: 'app-configuracion-retos',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChallengeCardComponent],
  template: `
    <div class="flex h-full">
      <!-- Middle Column: Challenge Cards -->
      <div class="w-[18.5vw] min-w-[18.5vw] border-r border-alarma-border p-[1vw] flex flex-col gap-[1vh]">
        <a routerLink="matematico" (click)="setActive('matematico')">
          <app-challenge-card
            title="Problemas matemáticos"
            [icon]="calculatorIcon"
            [(checked)]="mathEnabled"
            [active]="activeChallenge() === 'matematico'" />
        </a>
        <a routerLink="qr" (click)="setActive('qr')">
          <app-challenge-card
            title="Escáner código QR"
            [icon]="qrIcon"
            [(checked)]="qrEnabled"
            [active]="activeChallenge() === 'qr'" />
        </a>
        <a routerLink="caminar" (click)="setActive('caminar')">
          <app-challenge-card
            title="Caminar pasos"
            [icon]="walkIcon"
            [(checked)]="walkEnabled"
            [active]="activeChallenge() === 'caminar'" />
        </a>
      </div>

      <!-- Right Content Area -->
      <div class="flex-1 overflow-auto">
        <router-outlet />
      </div>
    </div>
  `
})
export class ConfiguracionRetosComponent {
  activeChallenge = signal('');
  mathEnabled = signal(true);
  qrEnabled = signal(true);
  walkEnabled = signal(true);

  calculatorIcon = `<svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`;

  qrIcon = `<svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`;

  walkIcon = `<svg xmlns="http://www.w3.org/2000/svg" style="width:1.6vw;height:1.6vw" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>`;

  constructor(private router: Router) {
    const url = this.router.url;
    if (url.includes('matematico')) this.activeChallenge.set('matematico');
    else if (url.includes('qr')) this.activeChallenge.set('qr');
    else if (url.includes('caminar')) this.activeChallenge.set('caminar');
  }

  setActive(challenge: string) {
    this.activeChallenge.set(challenge);
  }
}
