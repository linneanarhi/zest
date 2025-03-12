const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;
const app = express(); //Här är expressapplikationen vi skapat

const db = new Database("./db/products.db", {
    verbose: console.log
});

function createSlug(productName) {
    return productName.toLowerCase()
        .replace(/\s+/g, '-')  // Ersätt mellanslag med bindestreck
        .replace(/[^\w\-]+/g, '') // Ta bort icke-alfanumeriska tecken
        .replace(/\-\-+/g, '-') // Ta bort dubbla bindestreck
        .replace(/^-+/, '') // Ta bort bindestreck i början
        .replace(/-+$/, ''); // Ta bort bindestreck i slutet
}


//till startsidan
app.get("/api/products", (req, res) => {

    const select = db.prepare("SELECT id, productName, description, image, SKU, price, brand, publishDate FROM products ORDER BY RANDOM() LIMIT 8");
    const products = select.all();

    products.forEach(product => {
        product.slug = createSlug(product.productName);
        console.log(`Genererad slug: ${product.slug} för produkt: ${product.productName}`);
    });

    res.json(products);
});

//sökresultat
app.get("/api/search", (req, res) => {
    const query = req.query.q; // Hämta sökfrågan från frontend
    if (!query) {
        return res.status(400).json({ error: "Ingen sökfråga angiven" });
    }

    const select = db.prepare("SELECT id, productName, description, image, SKU, price, brand, publishDate FROM products WHERE productName LIKE ?");
    const products = select.all(`%${query}%`); // Hämta produkter som matchar sökningen

        // Generera slug för varje produkt
    products.forEach((product) => {
        product.slug = createSlug(product.productName); // Skapa slug baserat på produktnamnet
        console.log("Generated slug:", product.slug); // Kontrollera vad som genereras
    });

    res.json(products);
});


//till detaljsidan
app.get("/api/products/:slug", (req, res) => {
    const slug = req.params.slug; 
    const select = db.prepare("SELECT id, productName, description, image, SKU, price, brand, publishDate FROM products");
    const products = select.all();
    
    
    const product = products.find(p => createSlug(p.productName) === slug);
    
    console.log(`Genererad slug: ${product.slug} för produkt: ${product.productName}`);
    if (product) {
        res.json(product); 
    } else {
        res.status(404).json({ error: "Produkt inte hittad" }); 
    }
});



app. listen(port, () => {
    console.log("Server started on port 8000");
});