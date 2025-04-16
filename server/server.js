const bodyParser = require("body-parser");
const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;
const app = express();

const db = new Database("./db/products.db", {
  verbose: console.log,
});

app.use(bodyParser.json());

function createSlug(productName) {
  return productName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Till startsidan
app.get("/api/products", (req, res) => {
  // Hämta senaste 7 dagarna
  const recentSelect = db.prepare(`
    SELECT id, productName, description, image, SKU, price, brand, publishDate 
    FROM products 
    WHERE publishDate >= ? 
    ORDER BY publishDate DESC 
  `);

  const sevenDaysAgo = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
  const recentProducts = recentSelect.all(sevenDaysAgo);

  // Hämta äldre produkter
  const olderSelect = db.prepare(`
    SELECT id, productName, description, image, SKU, price, brand, publishDate 
    FROM products 
    WHERE publishDate < ? 
    ORDER BY RANDOM() 
  `);

  const olderProducts = olderSelect.all(sevenDaysAgo);

  const allProducts = [...recentProducts, ...olderProducts];
  const limitedProducts = allProducts.slice(0, 8);

  limitedProducts.forEach((product) => {
    product.slug = createSlug(product.productName);
    console.log(
      `Genererad slug: ${product.slug} för produkt: ${product.productName}`
    );
  });

  res.json(limitedProducts);
});


app.get("/api/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const searchStmt = db.prepare(`
    SELECT id, productName, description, image, SKU, price, brand, category, publishDate 
    FROM products
    WHERE productName LIKE ? OR description LIKE ?
  `);

  const results = searchStmt.all(`%${query}%`, `%${query}%`).map((product) => ({
    ...product,
    slug: createSlug(product.productName),
  }));

  res.json(results);
});




// Hämta relaterade produkter
app.get("/api/related-products", (req, res) => {
  const { category, excludeProductName } = req.query;

  if (!category || !excludeProductName) {
    return res
      .status(400)
      .json({ error: "Category and excludeProductName are required" });
  }

  const select = db.prepare(`
    SELECT id, productName, description, image, SKU, price, brand, category, publishDate 
    FROM products
    WHERE category = ? AND productName NOT LIKE ?
  `);

  const relatedProducts = select.all(category, `%${excludeProductName}%`);

  relatedProducts.forEach((product) => {
    product.slug = createSlug(product.productName);
  });

  res.json(relatedProducts);
});

// Till detaljsidan
app.get("/api/products/:slug", (req, res) => {
  const slug = req.params.slug;

  const select = db.prepare(`
    SELECT id, productName, description, image, SKU, price, brand, category, publishDate 
    FROM products
  `);
  const products = select.all();

  const product = products.find((p) => createSlug(p.productName) === slug);

  if (!product) {
    return res.status(404).json({ error: "Produkt inte hittad" });
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  res.json({ product, relatedProducts });
});

// Admin formulär
app.post("/api/products", (req, res) => {
  const {
    productName,
    description,
    image,
    SKU,
    price,
    brand,
    category,
    publishDate,
  } = req.body;
  const product = {
    productName,
    description,
    image,
    SKU,
    price,
    brand,
    category,
    publishDate,
  };
  const existingProduct = db
    .prepare(
      `
        SELECT * FROM products WHERE productName = ? OR image = ?
        `
    )
    .get(productName, image);

  if (existingProduct) {
    return res
      .status(400)
      .json({ message: "Product Name or URL already exists." });
  }

  const insert = db.prepare(`
        INSERT INTO products (
        productName, 
        description, 
        image, 
        SKU, 
        price, 
        brand,
        category, 
        publishDate
        ) VALUES (
        @productName, 
        @description, 
        @image, 
        @SKU, 
        @price, 
        @brand, 
        @category,
        @publishDate
        )
    `);

  insert.run(product);

  res.status(201).json({ message: "Product added." });
});

// Admin lista
app.get("/api/adminproducts", (req, res) => {
  const select = db.prepare(
    "SELECT id, productName, SKU, price FROM products ORDER BY publishDate DESC"
  );
  const products = select.all();

  res.json(products);
});

app.delete("/api/adminproducts/:id", (req, res) => {
  const { id } = req.params;

  const deleteStmt = db.prepare("DELETE FROM products WHERE id = ?");
  const result = deleteStmt.run(id);

  if (result.changes > 0) {
    res.json({ success: true, message: "Product deleted successfully" });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log("Server started on port 8000");
});
