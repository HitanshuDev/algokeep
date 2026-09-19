# AlgoKeep — DSA Notes Manager

![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Production-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

Full-stack app for organizing algorithmic notes (topic, language, difficulty) with per-user auth and private data. Shipped end-to-end: local dev → Docker → AWS EC2 → HTTPS → CI/CD.

**Live:** https://algokeep.hitanshukhandelwal.com &nbsp;|&nbsp; **Repo:** https://github.com/HitanshuDev/algokeep

---

## ✨ Features

- JWT authentication (signup/login), user-scoped private notes
- Full CRUD for notes, categorized by topic, language, and difficulty
- Favorites, grid/list views, memoized filtering for large collections
- Responsive UI, HTTPS in production

## 🧩 Tech Stack

| Layer | Choices |
|---|---|
| Frontend | Next.js 16 (App Router), TypeScript, Redux Toolkit + Reselect, Tailwind CSS |
| Backend | Node.js, Express, MongoDB/Mongoose, JWT + bcrypt |
| Infra | Docker, Docker Compose, Docker Hub, AWS EC2, Nginx, Certbot, GitHub Actions |

## Architecture

```
GitHub push (master)
      │  GitHub Actions: build → push images → SSH deploy
      ▼
User Browser (HTTPS) → Nginx (443) → Frontend (3000)
                                   → Backend (5000) → MongoDB
```

## Engineering Highlights

- **CI/CD**: pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — builds & pushes Docker images, then SSHes into EC2 to `docker compose pull && up -d`. No manual deploy steps.
- **Auth**: JWT (7-day expiry) + bcrypt password hashing; middleware scopes every notes query to `req.user`.
- **State**: Redux Toolkit with Reselect-memoized selectors, so filtering large note collections doesn't recompute on every render.
- **Immutable prod images**: `docker-compose.yml` (no volumes/build context, versioned image tags) vs. `docker-compose.dev.yml` (hot reload, mounted volumes) — separate configs for dev vs. prod.
- **TLS**: Nginx reverse proxy in front of both services, HTTPS via Certbot/Let's Encrypt with auto-renewal.

## Getting Started

```sh
git clone https://github.com/HitanshuDev/algokeep && cd algokeep
```
Copy `backend/.env.example` → `backend/.env` (`MONGO_URI`, `JWT_SECRET`) and set `NEXT_PUBLIC_API_URL` for the frontend.

**Option A — Docker (recommended):**
```sh
docker compose -f docker-compose.dev.yml up --build
```

**Option B — without Docker:**
```sh
cd backend && npm install && npm run dev     # terminal 1
cd frontend && npm install && npm run dev    # terminal 2
```

Either way: Frontend at `localhost:3000` · Backend at `localhost:5000`.

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup`, `/api/auth/login`, `/api/auth/logout` | Auth |
| GET/POST | `/api/notes` | List (filterable by `topic`, `difficulty`, `language`) / create |
| GET/PUT/DELETE | `/api/notes/:id` | Read / update / delete |

All notes routes require `Authorization: Bearer <token>`.

## 🌐 Production Deployment

**Platform:** AWS EC2 (Ubuntu 22.04), behind Nginx with Certbot-issued HTTPS.

**CI/CD:** pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
1. Build `backend`/`frontend` images, push to Docker Hub (tagged with version + commit SHA)
2. SSH into EC2, run `docker compose pull && docker compose up -d`

**Required GitHub Actions secrets:** `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY` (dedicated deploy key, not the account's personal key).

**Manual fallback** (if CI/CD is down):
```sh
docker compose pull && docker compose up -d
```

## 📚 Key Learnings / Takeaways

- Containerizing a multi-service app (frontend, backend, DB) with separate dev/prod Docker Compose configs
- Private database networking behind a public-facing API
- Nginx as a reverse proxy routing to multiple upstream services
- Automating build → push → deploy with GitHub Actions instead of manual SSH steps
- Redux + Reselect for memoized, render-efficient state derivation
- End-to-end HTTPS setup and renewal with Certbot on a self-managed EC2 box

---

**Hitanshu Khandelwal** — Full Stack Developer · AWS · Docker · Next.js · Node.js
MIT License
