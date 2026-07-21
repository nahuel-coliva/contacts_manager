import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="home">
      <h2>Gestione contatti</h2>
      <div class="actions">
        <a routerLink="/contacts" class="button primary">Lista contatti</a>
        <a routerLink="/contacts/new" class="button secondary">Aggiungi contatto</a>
      </div>
    </section>
  `,
  styles: [`
    .home {
      display: grid;
      gap: 24px;
      padding: 40px 0;
    }

    h2 {
      margin: 0;
      font-size: 28px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      border-radius: 6px;
      font-weight: 700;
      text-decoration: none;
    }

    .primary {
      background: #155eef;
      color: white;
    }

    .secondary {
      background: #ffffff;
      border: 1px solid #cfd4dc;
      color: #202124;
    }
  `]
})
export class HomeComponent {}
