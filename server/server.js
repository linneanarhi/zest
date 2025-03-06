const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;
const app = express(); //Här är expressapplikationen vi skapat

const db = new Database("./db/products.db", {
    verbose: console.log,
});

app.get("/api/products", (req, res) => {

    const select = db.prepare("SELECT id, productName, description, image, SKU, price, brand, publishDate FROM products LIMIT 8");
    const products = select.all();

    res.json(products);
});



app. listen(port, () => {
    console.log("Server started on port 8000");
});