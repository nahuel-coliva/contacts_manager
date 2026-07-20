import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { API_BASE_URL } from './api-base-url.token';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="app-shell">
      <h1>Contacts Manager</h1>
      <p>Backend configurato su: {{ apiUrl }}</p>
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

    p {
      margin: 0;
      color: #5f6368;
    }
  `]
})
export class AppComponent {
  constructor(@Inject(API_BASE_URL) public readonly apiUrl: string) {}
}

