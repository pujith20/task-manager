📝 Restomart Task Manager
A full-stack Task Manager application built as part of the Restomart Technical Intern Assignment.

📦 Tech Stack
🔧 Backend
Node.js

Express.js

TypeORM

PostgreSQL

Docker / Docker Compose

ts-node-dev

TypeScript

💻 Frontend (in restomart-tasks-app/)
Vite

React (with TypeScript)

Tailwind CSS

shadcn/ui

⚙️ Features
✅ Backend API
Implements a RESTful API for managing tasks:

Method	Endpoint	Description
GET	/api/tasks	List all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

📘 Task Entity Schema
Field	Type	Required
id	UUID	✅
title	string	✅
description	text	❌
status	todo | in_progress | done	✅
dueDate	date	❌
createdAt	timestamp	✅
updatedAt	timestamp	✅

🚀 Getting Started
📁 Folder Structure
bash
Copy
Edit
restomart/
├── backend/               # Express + TypeORM API
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   └── docker-compose.yml
└── restomart-tasks-app/   # Vite + React + Tailwind frontend
🧪 Setup Instructions
🐘 Backend
Prerequisites
Docker & Docker Compose

Node.js v18+

1. Create .env from example:
cp backend/.env.example backend/.env

2. Start backend + PostgreSQL:
cd backend
docker-compose up --build

3. API Available at:
http://localhost:3001/api/tasks

🎨 Frontend (React + Vite)
1. Install dependencies
cd restomart-tasks-app
npm install

3. Run the frontend
npm run dev

4. App will be available at:
http://localhost:8081

🔐 Notes
CORS is configured for localhost:8081

Uses Docker volume postgres-data to persist DB

All API endpoints tested via Postman


Demo
![image](https://github.com/user-attachments/assets/886cb462-e3cd-4cd3-89d1-c788b1bdc316)
![image](https://github.com/user-attachments/assets/0f96e4d8-78f7-4d15-9155-582be4bc3506)

Thanks for the opportunity
