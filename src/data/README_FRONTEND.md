# NovelNest Frontend

This is the web frontend for the NovelNest platform.

It is built with React Vite (TypeScript) and integrates with the NovelNest backend API to provide a responsive web experience for author to write novels, manage content, monitor earnings and admin tasks.

---

## Features

- Author
- Author Dashboard
- Novels Management
- Earnings
- Admin

- Admin dashboard

- Author payout management

- Analytics and stats

---

## Tech Stack

- Framework: React Vite + React Router (TypeScript)

- UI: Tailwind CSS

- State Management: Zustand

- Data Fetching: React Query + Axios

- Authentication: JWT (via backend API)

- Forms: React Hook Form + Zod validation

- Notifications: Toasts

- API Integration: REST API from NovelNest backend

---

## Prerequisites

- Node.js 18+

- npm or yarn

- NovelNest backend API running and accessible

- Environment variables configured

---

## Getting Started

1. **Unzip & Install**
   Unzip the downloaded code. After unzipping you will have NovelNest - Web Code zip folder. Unzip that folder, open in your preferred editor and run:

```bash
npm install
or
pnpm install
```

2. Setup Environment

- Make sure your backend is running`.env.example` → `.env.local`

- Fill values:

```env

VITE_BACKEND_URL=http://localhost:8099/api

VITE_SECRET_KEY=your_nextauth_secret

```

3. **Create Admin Account**
   Make sure your backend is running, then use any preferred API testing tool like Postman. Send a POST request to admin route to create an account like below:
   ![Postman](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/postman.png)

4. Run in Dev

```bash

npm run dev

```

Starts app at http://localhost:8080 or your configured port.

4. Build & Run

```bash

npm run build

npm start

```

5. **Modify Admin Settings**
   Visit admin settings tab to modify and adjust the values like below:
   ![Admin settings](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/Screenshot%202025-09-09%20112830.png)

---

## Modifying the Project

- Add new page/route: create a file under `pages/`

- Update API calls: modify `lib/controller.ts` or relevant service files

- Update state: edit zustand stores under `lib/store`

- Update styling: change `tailwind.config.js` or `index.css`

---

## Deployment Notes

- - Replace `VITE_BACKEND_URL` in env with production API url
