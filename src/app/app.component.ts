import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex h-[100vh] w-[100vw]">
      <app-sidebar />
      <main class="flex-1 overflow-auto">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`:host { display: block; height: 100vh; }`]
})
export class AppComponent {}
