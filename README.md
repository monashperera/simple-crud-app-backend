# Simple CRUD App – Backend by Monash Perera

A lightweight Node.js + Express backend that provides basic CRUD (Create, Read, Update, Delete) APIs.  
This project is ideal for beginners who want to learn how REST APIs work using Express and MongoDB (Mongoose).

---

## 🚀 Features

- Create new products  
- Get all products  
- Get a single product by ID  
- Update a product  
- Delete a product  
- MongoDB database connection  
- Clean and simple folder structure

---

## 📦 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Local)  
- Mongoose  

---

## 📁 Project Structure

```bash
project-root/
├── controllers/
│   ├── product-controller.js
├──models/
│   ├── product-model.js
├──routes/
│   ├── product.route.js
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/monashperera/simple-crud-app-backend.git
cd simple-crud-app-backend
```
### 2. Install dependencies

```bash
npm install
```
---

### 3. Start your local MongoDB server

Make sure MongoDB is installed and running locally on port 27017.

---

### 4. Run the server

```bash
npm run dev
```
Server will start at:

```bash 
http://localhost:3000
```

## 🗄️ API Endpoints

### Get all products
```bash
GET /api/products
```
### Get a product by ID
```bash
GET /api/products/:id
```

### Create a new product
```bash
POST /api/products
```
### Update a product
```bash
PUT /api/products/:id
```
### Delete a product
```bash
DELETE /api/products/:id
```

## 🧪 Testing the API

- Postman
- Thunder Client (VSCode)
- curl

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements.


## 👨‍💻 Author

- monashperera  - [@https://github.com/monashperera](https://github.com/monashperera)