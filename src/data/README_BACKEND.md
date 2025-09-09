# NovelNest Backend

This is the backend service for **NovelNest**, a reading & social platform.

It is built with **Node.js (TypeScript)**, **Express**, and **MongoDB (Mongoose)**, and provides REST APIs for novels, chapters, users, posts, comments, collections, and admin operations.

It integrates with **Cloudinary** for media uploads, **Resend/Nodemailer** for email, and uses **JWT-based authentication** with role separation (user/admin).

---

## Features

- **Auth**

- User & admin login/register

- JWT authentication & middleware

- Password reset with OTP/email

- **Users**

- Profile update, follow/unfollow

- Notifications & saved/reading lists

- **Novels**

- CRUD operations

- Likes, ratings, views counter

- **Chapters**

- CRUD chapters within novels

- Fetch by novel or ID

- Commenting support

- **Posts & Comments**

- CRUD posts, comments, likes

- Feeds: global, following, quotes

- **Collections**

- Curated collections of novels

- **Admin**

- Stats, vendor management, payouts

- **Services**

- Earnings processing

- Configurable platform settings

- **Integrations**

- Cloudinary (file uploads)

- Email sending via Resend/Nodemailer

- Logging via Winston

---

## Tech Stack

- **Language**: TypeScript

- **Framework**: Express

- **Database**: MongoDB (Mongoose)

- **Auth**: JWT

- **File Uploads**: Multer + Cloudinary

- **Email**: Nodemailer + Resend

- **Logging**: Winston + Daily Rotate

- **Job Queue**: Bull (Redis required if enabled)

- **Security**: Helmet, CORS, bcryptjs

---

## Project Structure

```

src/

config/ # DB, Cloudinary

controllers/ # Route handlers

middleware/ # Auth, errors, file upload

models/ # Mongoose schemas

routes/ # Express routes

services/ # Business logic (earnings, settings)

utils/ # Error handling, helpers, email templates

index.ts # Server entry point

```

---

## Prerequisites

- Node.js **18+**

- npm or pnpm

- MongoDB instance (local or Atlas)

- Redis (optional, if using Bull)

- Cloudinary account (for image uploads)

- Resend API key or SMTP for email

---

## Getting Started

1.  **Unzip & Install**
    Unzip the downloaded code. After unzipping you will have NovelNest - Backend Code zip folder. Unzip that folder, open in your preferred editor and run:

```bash
npm install
or
pnpm install
```

2.  **Setup Environment**

- Copy `.env.example` → `.env`

- Fill values:

```env

PORT=3000

DB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/novelnest

JWT_SECRET=your_jwt_secret

JWT_EXPIRE=60d

CLOUDINARY_CLOUD_NAME=xxxx

CLOUDINARY_API_KEY=xxxx

CLOUDINARY_API_SECRET=xxxx

RESEND_KEY=your_resend_key

```

Setup **MongoDB**: Create an account [here](https://www.mongodb.com/cloud/atlas/register)
Create new project:
![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/mongo1.png)

Create new cluster in your newly created project:
![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/mongo2.png)

![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/mongo3.png)

Create a new database user (if not prompted before):
![Mongo db](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/mongo4.png)

Go back to the cluster and copy your connection string (use the username and password of the created database user):
![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/mongo5.png)
Paste the string into your .env, replacing the username and password approriately.

Signup for a [Cloudinary account](https://cloudinary.com/users/register_free), follow their instructions and get your keys like below:
![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/cloudinary.png)
Create an account on [Resend](https://resend.com/signup), follow their instructions and get your token like below:
![enter image description here](https://raw.githubusercontent.com/bolumaks/scribe-snap-guide/refs/heads/main/public/Screenshot%202025-09-08%20141811.png)

3.  **Run in Dev**

```bash

npm run dev

```

> Starts server with nodemon on port `8099` (override with `.env:PORT`).

4.  **Build & Run**

```bash
npm run build

npm start
```

---

## API Endpoints (sample)

Base URL: `http://localhost:8099/api`

- **Auth**

- `POST /users/register`

- `POST /users/login`

- `POST /admin/login`

- **Novels**

- `GET /novels`

- `GET /novels/:id`

- `POST /novels`

- **Chapters**

- `GET /chapters/novel/:novelId/chapters`

- `POST /chapters`

- **Posts**

- `GET /posts`

- `POST /posts`

- **Comments**

- `POST /comments`

- `PUT /comments/:id/like`

(See `/src/routes/*.ts` for full list)

---

## Modifying the Project

- **Add new route**: create controller → route file → mount in `index.ts`

- **Add model**: define in `src/models` with Mongoose

- **Middleware**: extend in `src/middleware`

- **Services**: for background tasks/logic (e.g., payouts, analytics)

- **Utils**: common helpers, email templates

---

## Testing

No formal test suite configured. Recommend adding **Jest** or **Mocha/Chai**.

---

## Deployment Notes

- Ensure environment variables are set

- Use a managed MongoDB (e.g., Atlas)

- Configure production logging

- Secure `JWT_SECRET`

- Set up Cloudinary credentials

- Configure Resend/Nodemailer for email delivery
