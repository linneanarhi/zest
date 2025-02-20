CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT UNIQUE,
    description TEXT,
    image TEXT,
    SKU TEXT, 
    price INTEGER,
    brand TEXT,
    publishDate DATETIME
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate
) VALUES (
    'Svart tröja',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://placehold.co/600x400',
    'AAA123',
    '999',
    'Freaky Fashion™',
    '2025-02-19'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate
) VALUES (
    'Röd tröja',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://placehold.co/600x400?text=red-shirt',
    'AAA345',
    '999',
    'Freaky Fashion™',
    '2025-02-18'
);
