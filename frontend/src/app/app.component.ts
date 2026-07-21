import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="app-shell">
      <h1>Contacts Manager</h1>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .app-shell {
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 20px;
    }

    h1 {
      margin: 0 0 12px;
      font-size: 32px;
    }

  `]
})
export class AppComponent {}
