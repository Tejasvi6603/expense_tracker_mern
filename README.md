# Expense_Tracker

## Project Overview
The Expense Tracker is a full-stack application that helps users track income and expenses, categorize transactions, and view analytics for better financial management.

## Key Features
- **User Authentication** — Sign-up/Login with JWT-based authorization
- **Transaction Management** — Add, edit, delete, and view transactions
- **Categorization** — Assign transactions to predefined or custom categories
- **Date Filtering** — View transactions for specific months or date ranges
- **Dashboard Analytics** — Summary of income, expenses, and balance
- **Responsive UI** — Optimized for both desktop and mobile devices

## Prerequisites

Before starting, make sure you have installed:

- **Node.js**: v18.x or later — (https://nodejs.org/)
- **npm**: v9.x or later (comes with Node.js)
- **MongoDB**: Installed locally — (https://www.mongodb.com/try/download/community)
- **MongoDB Compass** (GUI tool for MongoDB) —(https://www.mongodb.com/products/compass)
- **Chart.js**: JavaScript library for data visualization — installed via npm
- **Docker & Docker Compose**:for containerized setup — (https://www.docker.com/)

## Technical Architecture:

- Frontend:

    Utilize React.js for building the user interface, tsparticle library for awesome background effect and used other libraries like unique-names-generator, react-     datepicker, moment
    Implement responsive design using CSS frameworks like Bootstrap and Material-Icons.

- Backend:

    Use Node.js and Express.js to build a RESTful API for handling client requests and serving as the application's backend.

    Implement authentication and authorization using JSON Web Tokens (JWT) and middleware to protect endpoints.

- Database:

    Store all data, including user information, expense entries, and categories, in MongoDB, a NoSQL database.

    Implement Mongoose ORM for schema definition and validation.





