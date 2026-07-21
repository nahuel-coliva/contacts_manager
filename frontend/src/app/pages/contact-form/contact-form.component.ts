import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="page">
      <div class="toolbar">
        <h2>Aggiungi contatto</h2>
        <a routerLink="/" class="link-button">Home</a>
      </div>

      <form (ngSubmit)="addContact()" #contactForm="ngForm">
        <label>
          Nome
          <input name="name" [(ngModel)]="contact.name" required>
        </label>

        <label>
          Cognome
          <input name="surname" [(ngModel)]="contact.surname" required>
        </label>

        <label>
          Email
          <input name="email" type="email" [(ngModel)]="contact.email" required>
        </label>

        <label>
          Telefono
          <input name="phone" [(ngModel)]="contact.phone" required>
        </label>

        <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

        <div class="actions">
          <button type="submit" [disabled]="contactForm.invalid || isSaving">
            Aggiungi
          </button>
          <button type="button" class="secondary" (click)="cancel()">
            Annulla
          </button>
        </div>
      </form>
    </section>
  `,
  styles: [`
    .page {
      display: grid;
      gap: 18px;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    h2 {
      margin: 0;
      font-size: 24px;
    }

    .link-button {
      color: #155eef;
      font-weight: 700;
      text-decoration: none;
    }

    form {
      display: grid;
      gap: 16px;
      max-width: 520px;
    }

    label {
      display: grid;
      gap: 6px;
      font-weight: 700;
    }

    input {
      min-height: 40px;
      padding: 0 10px;
      border: 1px solid #cfd4dc;
      border-radius: 6px;
      font: inherit;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    button {
      min-height: 42px;
      padding: 0 18px;
      border: 0;
      border-radius: 6px;
      background: #155eef;
      color: #ffffff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.65;
    }

    .secondary {
      background: #ffffff;
      border: 1px solid #cfd4dc;
      color: #202124;
    }

    .error {
      margin: 0;
      color: #b42318;
      font-weight: 700;
    }
  `]
})
export class ContactFormComponent {
  contact: Omit<Contact, 'id'> = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };
  isSaving = false;
  errorMessage = '';

  constructor(
    private readonly contactService: ContactService,
    private readonly router: Router
  ) {}

  addContact(): void {
    this.isSaving = true;
    this.errorMessage = '';

    this.contactService.create(this.contact).subscribe({
      next: () => {
        this.router.navigate(['/contacts']);
      },
      error: () => {
        this.errorMessage = 'Impossibile aggiungere il contatto.';
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
