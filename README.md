# Quasar + Express + Docker (Advanced)

This project demonstrates a full-stack application with a Quasar Frontend and an Express Backend, orchestrated using Docker Compose.

## Features

- **Frontend**: Quasar Framework (Vue.js) with Vite.
- **Backend**: Express.js with CORS and Logging.
- **Docker**:
  - Multi-stage build for Backend.
  - Docker Compose for orchestration.
  - Healthchecks and Volume persistence.
- **Git**: Feature-branch workflow with Conventional Commits.

## Getting Started

### Prerequisites
- Docker and Docker Compose installed.

### Run the Application

```bash
docker-compose up --build -d
```

- **Frontend**: [http://localhost:8080](http://localhost:8080)
- **Backend API**: [http://localhost:3000/api/demo](http://localhost:3000/api/demo)

### Stop the Application

```bash
docker-compose down -v
```

## Project Structure

- `frontend/`: Quasar SPA.
- `backend/`: Express API.
- `docker-compose.yml`: Service orchestration.
