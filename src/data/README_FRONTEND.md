# NovelNest Frontend

This is the web frontend for the NovelNest platform.  
It is built with Next.js (TypeScript) and integrates with the NovelNest backend API to provide a responsive web experience for reading, browsing novels, user interaction, and admin tasks.  

---

## Features

- Authentication
  - User login & signup
  - Admin login
  - JWT-based session handling

- User Dashboard
  - Profile view and update
  - Saved and reading lists
  - Notifications

- Novels
  - Browse novels by genre or category
  - View novel details (cover, likes, chapters, stats)
  - Like, save, or add novels to reading list

- Reading
  - In-browser chapter reader
  - Customizable reading settings (font, background, size)

- Posts & Community
  - View and create posts about novels
  - Like and comment on posts
  - Following feed and global feed

- Admin
  - Admin dashboard
  - Vendor and payout management
  - Analytics and stats

---

## Tech Stack

- Framework: Next.js (App Router, TypeScript)
- UI: Tailwind CSS
- State Management: Zustand
- Data Fetching: React Query + Axios
- Authentication: JWT (via backend API)
- Forms: React Hook Form + Zod validation
- Notifications: Toasts
- API Integration: REST API from NovelNest backend

---

## Project Structure

```
app/
  (routes and pages for Next.js)
components/
  (reusable UI components)
lib/
  (api helpers, auth, utils)
store/
  (zustand state management)
styles/
  (tailwind and global css)
```

---

## Prerequisites

- Node.js 18+
- npm or yarn
- NovelNest backend API running and accessible
- Environment variables configured

---

## Getting Started

1. Clone & Install
   ```bash
   git clone <repo>
   cd bolumaks-novelnest-frontend
   npm install
   ```

2. Setup Environment
   - Copy `.env.example` → `.env.local`
   - Fill values:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:8099/api
     NEXT_PUBLIC_FLW_PUBLIC_KEY=your_flutterwave_public_key
     NEXTAUTH_SECRET=your_nextauth_secret
     NEXTAUTH_URL=http://localhost:3000
     ```

3. Run in Dev
   ```bash
   npm run dev
   ```

   Starts app at http://localhost:3000

4. Build & Run
   ```bash
   npm run build
   npm start
   ```

---

## Modifying the Project

- Add new page/route: create a file under `app/` (Next.js App Router)
- Update API calls: modify `lib/api.ts` or relevant service files
- Update state: edit zustand stores under `store/`
- Update styling: change `tailwind.config.js` or `styles/globals.css`

---

## Deployment Notes

- Replace `NEXT_PUBLIC_API_URL` with production backend URL
- Use real Flutterwave public key
- Secure NextAuth secret
- Ensure environment variables are configured on hosting platform (Vercel, etc.)

---

## License

MIT © Your Name
