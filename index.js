const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Simple CRUD API');
});

mongoose.connect("mongodb://localhost:27017/simple_api")
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error ", err)
    });