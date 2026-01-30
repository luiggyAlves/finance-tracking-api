# 💰 Finance Tracking API

REST API for personal finance management, developed with **Node.js**, **Fastify**, and **MongoDB**, fully documented according to the **OpenAPI (OAS) specification version 3.2.0**.

> ✅ This project explicitly follows the **OpenAPI 3.2.0** standard, as defined at:
> [https://spec.openapis.org/oas/v3.2.0.html](https://spec.openapis.org/oas/v3.2.0.html)

---

## 🚀 Overview

The **FinTrack API** is a simple REST API designed to **track personal income and expenses**.

The API focuses on three core operations:

* Registering **expenses (despesas)**
* Registering **income (receitas)**
* Viewing **aggregated financial data**

There is no user system, authentication, or category management. All data is handled globally and stored directly in the database.

Each financial entry contains:

* `descricao` — textual description of the entry
* `value` — numeric monetary value
* `type` — `receita` or `despesa`

---

## 🧱 Technologies Used

* Node.js
* Fastify
* MongoDB
* Mongoose
* OpenAPI 3.2.0

---

## 📦 Installation

```bash
git clone https://github.com/luiggyAlves/finance-tracking-api.git
cd fintrack-api
npm install
```

---

## ▶️ How to Run

### Development mode

```bash
npm run dev
```

The server will start at:

```
http://localhost:3000
```

### Production mode

```bash
npm start
```

Node.js version 18 or higher is recommended.

---

## 📂 Project Structure

```
FinTrackApi/
├── index.js # Application entry point
├── package.json
├── package-lock.json
├── db/
│ └── config.js # MongoDB connection configuration
├── functions/
│ └── functions.js # Business logic (receitas, despesas, total)
├── routes/
│ ├── index.js # Route aggregator
│ └── actionsRouter.js # FinTrack routes (/receitas, /despesas, /total)
└── node_modules/ # Ignored by .gitignore
```

---

## 📘 Endpoints

All routes are prefixed with:

```
/finTrack
```

---

### 💸 Despesas (Expenses)

#### 🔍 List all expenses

**GET** `/finTrack/despesas`

##### 200 Response

```json
{
  "aluguel": 1200,
  "mercado": 450
}
```

---

#### ➕ Create a new expense

**POST** `/finTrack/despesas`

##### Request body

```json
{
  "descricao": "mercado",
  "value": 450
}
```

> 📌 Duplicate descriptions are ignored.

---

### 💰 Receitas (Income)

#### 🔍 List all income

**GET** `/finTrack/receitas`

##### 200 Response

```json
{
  "salario": 3500,
  "freelance": 800
}
```

---

#### ➕ Create a new income

**POST** `/finTrack/receitas`

##### Request body

```json
{
  "descricao": "salario",
  "value": 3500
}
```

---

### 📊 Total

#### 🔎 View total balance

**GET** `/finTrack/total`

##### 200 Response

```json
{
  "total": 2850
}
```

---

## 🧩 Data Models

### 💸 Transaction

```json
{
  "id": 1,
  "description": "string",
  "amount": 0,
  "type": "income | expense",
  "categoryId": 1,
  "createdAt": "string"
}
```

### 🗂️ Category

```json
{
  "id": 1,
  "name": "string"
}
```

---

## 📜 OpenAPI 3.2.0 Specification

```yaml
openapi: 3.2.0
info:
  title: FinTrack API
  description: Personal finance tracking API
  version: 1.0.0

servers:
  - url: http://localhost:3000

paths:
  /transactions:
    get:
      summary: List all transactions
      responses:
        "200":
          description: List of transactions
    post:
      summary: Create a transaction
      responses:
        "201":
          description: Transaction created

  /transactions/{id}:
    get:
      summary: Get transaction by ID
    put:
      summary: Update transaction
    delete:
      summary: Delete transaction

  /categories:
    get:
      summary: List all categories
    post:
      summary: Create category

components:
  schemas:
    Transaction:
      type: object
      properties:
        id:
          type: integer
        description:
          type: string
        amount:
          type: number
        type:
          type: string
        categoryId:
          type: integer
        createdAt:
          type: string

    Category:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```

---

## ✅ OpenAPI Compliance

✔ Explicit versioning (`openapi: 3.2.0`)
✔ Clear definition of resources and endpoints
✔ Compatible with Swagger UI and Redoc

---

## 📚 Learnings

This project enabled hands-on learning in several key areas:

* **Requirements elicitation and fulfillment** applied to a real-world problem
* Using **Mongoose** to define schemas and interact with MongoDB
* Designing simple and clear RESTful endpoints with Fastify

---

## 📄 License

This project is open-source and available for educational and commercial use.
