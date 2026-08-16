# Websoftify

Professional software development company website — MERN Stack.

## Folder Structure

```
websoftify/
├── client/                 # Frontend (React + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/                 # Backend (Express + MongoDB)
    ├── models/
    ├── routes/
    ├── index.js
    ├── .env
    └── package.json
```

## Setup & Run

### 1. Backend (Server)

```bash
cd server
npm install
npm run dev
```

Server: http://localhost:5000

### 2. Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Website: http://localhost:5173

## Environment

`server/.env` file mein MongoDB URI set karo:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Icons
- **Backend:** Node.js, Express, MongoDB
