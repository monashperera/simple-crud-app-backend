const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js');
const app = express()

// Load .env file
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Simple CRUD API');
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to database");
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error ", err)
    });