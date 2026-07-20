# Contacts Manager

Monorepo per una web app di gestione contatti.

- Frontend: Angular 17
- Backend: Spring Boot 3.5, Java 21
- Database: H2 in-memory
- Deploy previsto: frontend su Vercel/Netlify, backend su Render/Heroku

## Struttura

```text
contacts_manager/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

## Requisiti locali

- Node.js 20+
- npm 10+
- JDK 21

## Avvio backend

```bash
cd backend
./mvnw spring-boot:run
```

Su Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Il backend parte su `http://localhost:8080`. La porta puo essere configurata con la variabile `PORT`.

## Avvio frontend

```bash
cd frontend
npm install
npm start
```

Il frontend parte su `http://localhost:4200`.

L'URL del backend e configurato in:

- `frontend/src/environments/environment.ts`
- `frontend/src/environments/environment.production.ts`

Aggiorna `apiUrl` con l'URL pubblico del backend Render quando disponibile.

## Deploy

### Backend Render

Il backend include un `Dockerfile` in `backend/`.

Render puo costruire l'immagine partendo dalla cartella `backend` e usa la variabile `PORT` esposta dalla piattaforma.

### Frontend Vercel/Netlify

Configura il progetto frontend con:

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist/contacts-manager/browser`

