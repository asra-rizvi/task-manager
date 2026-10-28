# Task Manager

A full-stack task manager where you can add, complete, and delete tasks. Data is stored in a MongoDB Atlas database.

## Tech stack

- **Frontend:** React (Vite), Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Mongoose)

## Features

- Create tasks with a title and optional description
- Mark tasks as complete or incomplete
- Delete tasks
- Data persists in the database across page refreshes

## API endpoints

| Method | Endpoint       | Description     |
|--------|----------------|-----------------|
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create a task   |
| PUT    | /api/tasks/:id | Update a task   |
| DELETE | /api/tasks/:id | Delete a task   |

## Running locally

1. Clone the repo
2. In `backend/`, run `npm install`, then create a `.env` file containing:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Then run `node server.js`
3. In `frontend/`, run `npm install` and then `npm run dev`
4. Open http://localhost:5173

## Live demo

https://task-manager-f-687k.onrender.com/

Note: the backend runs on a free tier that sleeps after 15 minutes of inactivity, so the first load can take up to a minute.
