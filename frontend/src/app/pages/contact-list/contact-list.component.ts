import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page">
      <div class="toolbar">
        <h2>Lista contatti</h2>
        <a routerLink="/" class="link-button">Home</a>
      </div>

      <p *ngIf="isLoading">Caricamento contatti...</p>
      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

      <table *ngIf="!isLoading && !errorMessage && contacts.length > 0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let contact of contacts">
            <td>{{ contact.name }}</td>
            <td>{{ contact.surname }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
          </tr>
        </tbody>
      </table>

      <p *ngIf="!isLoading && !errorMessage && contacts.length === 0">
        Nessun contatto presente.
      </p>
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

    table {
      width: 100%;
      border-collapse: collapse;
      background: #ffffff;
      border: 1px solid #d9dde3;
    }

    th,
    td {
      padding: 12px;
      border-bottom: 1px solid #edf0f3;
      text-align: left;
    }

    th {
      background: #f1f4f8;
      font-size: 14px;
    }

    .error {
      color: #b42318;
      font-weight: 700;
    }
  `]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private readonly contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.findAll().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossibile caricare la lista contatti.';
        this.isLoading = false;
      }
    });
  }
}
