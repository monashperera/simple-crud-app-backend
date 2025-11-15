const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API Testing2');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get one product using id

app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Add a Product

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Update a Product

app.put('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
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

