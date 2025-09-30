# Store Rating System 

A full-stack web application that allows users to find, rate, and review local stores. It features role-based access control for normal users, store owners, and administrators, each with a dedicated dashboard to manage their tasks.



---
## ## Features

- **User Authentication**: Secure user registration and login with JWT (JSON Web Tokens).
- **Role-Based Access Control**: Three distinct user roles with different permissions:
  - **System Admin**: Manages all users and stores, and views system-wide statistics.
  - **Store Owner**: Manages their specific store and views ratings submitted by users.
  - **Normal User**: Can view stores, submit ratings, and manage their profile.
- **Protected Routes**: Dashboards and specific actions are protected, redirecting unauthorized users to the login page.
- **Store and Rating Management**: Functionality to add, view, and rate stores.
- **Responsive UI**: A modern and responsive user interface built with Material-UI (MUI).

---
## ## Tech Stack

### ### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern frontend build tool.
- **Material-UI (MUI)**: A comprehensive React UI component library.
- **React Router**: For client-side routing and navigation.

### ### Backend
- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **PostgreSQL(SUPABASE)**: A powerful, open-source object-relational database system.
- **node-postgres (pg)**: A non-blocking PostgreSQL client for Node.js.
- **JSON Web Token (JWT)**: For generating and verifying authentication tokens.
- **bcrypt**: For securely hashing user passwords.

---
## ## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (which includes npm)
- [PostgreSQL](https://www.postgresql.org/download/)

---
## ## Installation & Setup

Follow these steps to get your development environment set up.

### ### 1. Clone the Repository
```bash
git clone [https://github.com/Adidone/Store-Rating-Sysytem.git](https://github.com/Adidone/Store-Rating-System.git)
cd Store-Rating-Sysytem

# .env (backend)
DATABASE_URL=postgresql://postgres:postgres@db.vyfroalujimdbbspwmjx.supabase.co:5432/postgres
JWT_SECRET=adityadone

cd backend
npm install

cd ../frontend
npm install
