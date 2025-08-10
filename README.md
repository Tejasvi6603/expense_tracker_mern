# Expense_Tracker

## Project Overview
The Expense Tracker is a full-stack application that helps users track income and expenses, categorize transactions, and view analytics for better financial management.

## Key Features
- **User Authentication** — Sign-up and Login
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

## Run Locally

Clone the project

```bash
  git clone https://github.com/Tejasvi6603/expense_tracker_mern.git
```

Go to the project directory

```bash
  cd expense_tracker_mern
```

Go to the frontend directory and Install dependencies

```bash
  cd frontend
```
```bash
  npm install
```

Go to the backend directory and Install dependencies

```bash
  cd backend
```
```bash
  npm install
```

Start the frontend server

```bash
  npm start
```


Start the backend server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend folder

create config folder and add config.env file in it and all all env variables there.

`MONGO_URL` : Your MongoDB Connection String

`PORT`: PORT number

## Docker Setup

Build and start containers
```bash
   docker-compose up --build
```

Access services
Frontend: http://localhost:3000
Backend API: http://localhost:5000
MongoDB: Accessible via Compass at mongodb://localhost:YOUR_MONGODB_ADDRESS

Stop containers
```bash
    docker-compose down
```

##  API Endpoints 

### Authentication
| Method | Endpoint                  | Description                  | Body Params |
|--------|---------------------------|------------------------------|-------------|
| POST   | `/api/auth/register`       | Register new user            | `{ name, email, password }` |
| POST   | `/api/auth/login`          | Login and receive JWT token  | `{ email, password }` |
| POST   | `/api/auth/setAvatar`      | Set user avatar image        | `{ avatarImage, userId }` |

---

### Transactions
| Method | Endpoint                        | Description                 | Body Params |
|--------|---------------------------------|-----------------------------|-------------|
| POST   | `/api/v1/addTransaction`         | Add a new transaction       | `{ amount, type, category, date, description }` |
| GET    | `/api/v1/getTransaction`         | Retrieve all transactions   | *Query params:* `month`, `year` *(optional)* |
| PUT    | `/api/v1/updateTransaction`      | Update an existing transaction | `{ id, amount, type, category, date, description }` |
| DELETE | `/api/v1/deleteTransaction`      | Delete a transaction        | `{ id }` |


## Sample data 

Example of a single expense transaction:

```json
{
  "title": "Grocery Shopping",
  "amount": 120,
  "description": "Weekly groceries from the supermarket",
  "category": "Food",
  "date": "2025-01-05",
  "transactionType": "expense"
}
```


