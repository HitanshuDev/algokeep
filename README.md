# 📘 AlgoKeep — DSA Notes Manager (Full-Stack, Production-Ready)

![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Production-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

AlgoKeep is a full-stack web application that allows users to securely create, organize, and manage algorithmic notes for Data Structures & Algorithms. Users can categorize notes by topic, language, and difficulty, filter their collections, mark favorites, and edit content in place — with full auth and private user data.

AlgoKeep was taken from local development → Docker → AWS EC2 → subdomain → HTTPS, demonstrating complete application ownership from frontend to cloud deployment.

---

## 📑 Table of Contents

- [Demo & Links](#-demo--links)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Docker Architecture](#-docker-architecture)
- [API Endpoints](#-api-endpoints)
- [Authentication Flow](#-authentication-flow)
- [State Management](#-state-management)
- [Production Deployment](#-production-deployment)
- [Troubleshooting](#-troubleshooting)
- [Key Learnings](#-key-learnings--takeaways)
- [Future Enhancements](#-possible-future-enhancements)

---

## 🎥 Demo & Links

| Link | URL |
|------|-----|
| **Live Demo** | https://algokeep.hitanshukhandelwal.com |
| **Repository** | https://github.com/HitanshuDev/algokeep |

---

## ✨ Features

✔ JWT Authentication (Signup / Login)  
✔ User-scoped private notes  
✔ Full CRUD for algorithm notes  
✔ Smart Categorization:
  - Topic-based organization
  - Multiple programming languages
  - Difficulty levels (Easy/Medium/Hard)

✔ Favorites management  
✔ Grid/List layout options  
✔ Memoized filtering with Reselect (optimized performance)  
✔ Responsive & mobile-friendly UI  
✔ SEO-optimized pages  
✔ Production-grade deployment with HTTPS  

---

## 🧩 Tech Stack

### Frontend
- **Next.js 16** (App Router) — React framework with built-in SSR & routing
- **TypeScript** — Type-safe development
- **Redux Toolkit** — State management
- **Reselect** — Memoized selectors for efficient filtering
- **Tailwind CSS** — Utility-first styling
- **Lucide Icons** — Clean, lightweight icon library

### Backend
- **Node.js 18+** — JavaScript runtime
- **Express.js** — Lightweight web framework
- **MongoDB** — Document-oriented database with Mongoose ODM
- **JWT Authentication** — Secure token-based auth
- **bcrypt** — Password hashing

### DevOps & Infrastructure
- **Docker & Docker Compose** — Container orchestration
- **MongoDB (Containerized)** — Database in Docker
- **Docker Hub** — Image registry
- **AWS EC2** (Ubuntu 22.04) — Cloud hosting
- **Nginx** — Reverse proxy & load balancing
- **HTTPS + Certbot** (Let's Encrypt) — SSL/TLS encryption
- **Custom Subdomain** — `algokeep.<domain>`

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18 or higher
- **npm**: v8 or higher (comes with Node.js)
- **Docker**: v20 or higher
- **Docker Compose**: v1.29 or higher
- **Git**: For cloning the repository
- **MongoDB**: (Optional - runs in Docker)

### Verify Installation:
```sh
node --version
npm --version
docker --version
docker compose --version
```

---

## 📂 Project Structure

```
algokeep/
├── backend/
│   ├── src/
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth, validation
│   │   └── server.js       # Express app
│   ├── .env.example        # Environment template
│   └── Dockerfile          # Production image
│   └── Dockerfile.dev      # Development image (hot reload)
├── frontend/
│   ├── app/
│   │   ├── (auth)/         # Login/Signup pages
│   │   ├── notes/          # Notes management pages
│   │   └── layout.tsx      # Root layout
│   ├── store/              # Redux store setup
│   ├── .env.example        # Environment template
│   ├── Dockerfile          # Production image
│   └── Dockerfile.dev      # Development image (hot reload)
├── docker-compose.dev.yml  # Local dev setup
├── docker-compose.yml      # Production setup
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/HitanshuDev/algokeep
cd algokeep
```

### 2. Local Development Setup

#### Option A: Using Docker (Recommended)

```sh
# Start with hot-reload enabled
docker compose -f docker-compose.dev.yml up --build
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017

#### Option B: Manual Setup (Without Docker)

**Backend Setup:**
```sh
cd backend
cp .env.example .env
npm install
npm run dev
```

**Frontend Setup (in another terminal):**
```sh
cd frontend
cp .env.example .env
npm install
npm run dev
```

### 3. Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

---

## ⚙️ Configuration

### Environment Variables

#### Backend (.env)

```env
# MongoDB
MONGO_URI=mongodb://mongo:27017/algokeep

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRY=7d

# Server
PORT=5000
```

#### Frontend (.env.local)

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Production Environment

For AWS EC2 deployment, update these:

**Backend:**
```env
MONGO_URI=mongodb://mongo:27017/algokeep
JWT_SECRET=<strong-random-secret>
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://algokeep.yourdomain.com
```

**Frontend:**
```env
NEXT_PUBLIC_API_URL=https://algokeep.yourdomain.com/api
```

---

## 🐳 Docker Architecture

AlgoKeep uses **two separate compose files** for different environments:

### Local Development — Hot Reload Enabled

**File:** `docker-compose.dev.yml`

Features:
- Local volume mounts for live code reload
- File watching enabled (Next.js + Node.js)
- MongoDB exposed on port 27017 for debugging
- `CHOKIDAR_USEPOLLING` enabled for WSL/Docker Desktop
- Development Dockerfiles with dev dependencies

**Run locally:**
```sh
docker compose -f docker-compose.dev.yml up --build
```

### Production Deployment — Immutable Builds

**File:** `docker-compose.yml`

Features:
- No local volumes (immutable containers)
- No watchers or dev tooling
- Optimized image sizes
- Private MongoDB (no exposed ports)
- Suitable for EC2/Nginx setups
- Health checks enabled

**Deploy:**
```sh
docker compose pull
docker compose up -d
```

### Common Docker Commands

```sh
# View logs
docker compose -f docker-compose.dev.yml logs -f

# Stop containers
docker compose -f docker-compose.dev.yml down

# Remove volumes (clean slate)
docker compose -f docker-compose.dev.yml down -v

# Rebuild specific service
docker compose -f docker-compose.dev.yml up --build backend
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register new user |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/logout` | Logout user |

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all user notes (requires auth) |
| `POST` | `/api/notes` | Create new note (requires auth) |
| `GET` | `/api/notes/:id` | Get specific note |
| `PUT` | `/api/notes/:id` | Update note |
| `DELETE` | `/api/notes/:id` | Delete note |

### Query Parameters (Notes)

```
GET /api/notes?topic=Array&difficulty=Hard&language=JavaScript&limit=20
```

Supported filters:
- `topic` — Algorithm topic (Array, Graph, DFS, etc.)
- `difficulty` — Easy, Medium, Hard
- `language` — Python, JavaScript, Java, C++, etc.
- `limit` — Number of results (default: 20)
- `skip` — Pagination offset (default: 0)

### Example Requests

**Create Note:**
```json
POST /api/notes
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Binary Search",
  "description": "Efficient search in sorted arrays",
  "topic": "Searching",
  "difficulty": "Medium",
  "language": "JavaScript",
  "code": "function binarySearch(arr, target) { ... }"
}
```

**Get Notes with Filter:**
```
GET /api/notes?topic=Sorting&difficulty=Easy
Authorization: Bearer <token>
```

---

## 🔐 Authentication Flow

1. User signs up or logs in via frontend form
2. Backend validates credentials and hashes password with bcrypt
3. JWT token is generated (7-day expiry)
4. Token is returned to frontend and stored in `localStorage`
5. Token is sent with every API request in the `Authorization` header:
   ```
   Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
   ```
6. Backend middleware extracts and validates token
7. `req.user` is populated with decoded user ID
8. All notes queries are filtered by `userId`
9. Token refresh happens on app mount or when expired

### Token Storage

- **Location**: Browser `localStorage`
- **Key**: `authToken` (configurable via `.env`)
- **Security**: Sent via HTTPS in production

---

## 🧠 State Management

### Redux Structure

```
store/
├── slices/
│   ├── authSlice.ts      # User auth state
│   ├── notesSlice.ts     # Notes data
│   └── filterSlice.ts    # UI filters (topic, difficulty, etc.)
├── thunks/
│   ├── authThunks.ts     # Async login/signup
│   └── notesThunks.ts    # Async notes CRUD
└── selectors/
    └── notesSelectors.ts # Memoized filtering
```

### Memoized Filtering with Reselect

Instead of filtering inline, we use **Reselect** selectors:

```typescript
// Without Reselect (bad - recomputes every render):
const filteredNotes = state.notes.filter(n => n.difficulty === filter.difficulty);

// With Reselect (good - only recomputes when dependencies change):
export const selectFilteredNotes = createSelector(
  [selectNotes, selectFilters],
  (notes, filters) => notes.filter(n => n.difficulty === filters.difficulty)
);
```

**Benefits**:
- ✔ Prevents unnecessary re-renders
- ✔ Improves performance on large note collections
- ✔ Caches results between renders
- ✔ Clean separation of concerns

---

## 🌐 Production Deployment

### Platform: AWS EC2 (Ubuntu 22.04)

#### Step 1: Prepare Docker Images

```sh
# Build images locally
docker build -t yourusername/algokeep-backend:1.0.0 ./backend
docker build -t yourusername/algokeep-frontend:1.0.0 ./frontend

# Push to Docker Hub
docker push yourusername/algokeep-backend:1.0.0
docker push yourusername/algokeep-frontend:1.0.0
```

#### Step 2: EC2 Instance Setup

```sh
# SSH into EC2
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>

# Install Docker
sudo apt update && sudo apt install -y docker.io docker-compose

# Add user to docker group
sudo usermod -aG docker $USER

# Create app directory
mkdir -p ~/algokeep && cd ~/algokeep
```

#### Step 3: Pull & Deploy

```sh
# Create docker-compose.yml with production config
nano docker-compose.yml

# Pull latest images
docker compose pull

# Start services
docker compose up -d

# Verify
docker compose ps
```

#### Step 4: Nginx Reverse Proxy

```sh
# Install Nginx
sudo apt install -y nginx

# Create config
sudo nano /etc/nginx/sites-available/algokeep
```

**Nginx Config:**
```nginx
server {
    listen 80;
    server_name algokeep.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

Enable the site:
```sh
sudo ln -s /etc/nginx/sites-available/algokeep /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 5: DNS & HTTPS

**Update DNS (A Record):**
- Host: `algokeep`
- Type: `A`
- Value: `<EC2_PUBLIC_IP>`

**Enable HTTPS:**
```sh
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d algokeep.yourdomain.com

# Auto-renewal enabled by default
sudo systemctl status certbot.timer
```

### Final Architecture Diagram

```
User Browser (HTTPS)
         ↓
    Nginx (Port 443)
    Reverse Proxy
    ↙              ↘
Frontend (3000)  Backend (5000)
                    ↓
                MongoDB (internal)
```

### Monitoring & Maintenance

```sh
# View logs
docker compose logs -f backend
docker compose logs -f frontend

# Restart services
docker compose restart

# Update images
docker compose pull && docker compose up -d

# Check disk space
docker system df

# Cleanup unused images
docker image prune -a
```

---

## 🛠️ Troubleshooting

### Frontend Issues

| Problem | Solution |
|---------|----------|
| **Port 3000 already in use** | `lsof -i :3000` and kill process, or change port in `docker-compose.dev.yml` |
| **Next.js not hot-reloading** | Enable `CHOKIDAR_USEPOLLING=true` in docker-compose.dev.yml |
| **API calls failing (CORS error)** | Verify `CORS_ORIGIN` in backend `.env` matches frontend URL |
| **Login redirects to signup infinitely** | Check JWT token in localStorage, clear and try again |
| **Images not loading** | Verify public folder structure and image paths are relative |

### Backend Issues

| Problem | Solution |
|---------|----------|
| **MongoDB connection failed** | Ensure `mongo` service is running: `docker compose -f docker-compose.dev.yml ps` |
| **Port 5000 already in use** | Change `PORT` in backend `.env` |
| **bcrypt module not found** | Run `npm install` in backend directory |
| **JWT secret not set** | Add `JWT_SECRET` to `.env` file |
| **Notes endpoint returns 401** | Check token is sent in `Authorization` header format: `Bearer <token>` |

### Docker Issues

| Problem | Solution |
|---------|----------|
| **Containers won't start** | Check logs: `docker compose logs backend` |
| **Permission denied** | Run `sudo usermod -aG docker $USER` and restart terminal |
| **Out of disk space** | Run `docker system prune -a` to cleanup |
| **Volume mount issues (Windows)** | Ensure Docker Desktop has shared drives enabled |
| **Database lost after down** | Don't use `docker compose down -v` unless you want to clear data |

### Deployment Issues

| Problem | Solution |
|---------|----------|
| **HTTPS not working** | Verify certificate: `sudo certbot certificates` |
| **Nginx 502 Bad Gateway** | Check if backend is running: `docker compose ps` |
| **Domain not resolving** | Verify DNS A record points to correct EC2 IP |
| **Can't SSH into EC2** | Check security group allows port 22, verify key permissions: `chmod 400 key.pem` |

---

## 📚 Key Learnings / Takeaways

✔ **Containerization** — Built microservices from scratch using Docker  
✔ **Networking** — Private database networking with public-facing API  
✔ **Reverse Proxying** — Nginx routing frontend/backend traffic  
✔ **Immutable Deployments** — Versioned Docker images for reproducibility  
✔ **State Management** — Redux with memoized selectors for performance  
✔ **Authentication** — JWT flow with secure password hashing  
✔ **Cloud Infrastructure** — AWS EC2 setup, security groups, elastic IPs  
✔ **SSL/TLS** — Let's Encrypt automation with Certbot  
✔ **DevOps** — Full-stack ownership from dev → ops  
✔ **Production Debugging** — Log analysis, container monitoring, health checks  

---

## 🚀 Possible Future Enhancements

- 🤖 AI-assisted note generation with GPT integration
- 📤 Sharing & exporting notes (PDF, markdown)
- 🎨 Syntax highlighting for code blocks (Prism.js)
- 🔍 Full-text search with Fuse.js
- 🚀 Vercel CI/CD pipeline for auto-deployment
- 🌓 Light/Dark mode toggle
- ☁️ Cloud MongoDB (Atlas) for managed database
- 📊 Analytics dashboard for learning progress
- 🏆 Leaderboard for community challenges
- 📱 Mobile app (React Native)

---

## 👨‍💻 About the Author

**Hitanshu Khandelwal**  
Full Stack Developer | AWS | Docker | React/Next.js | Node.js

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

---

*Last Updated: January 14, 2026*
