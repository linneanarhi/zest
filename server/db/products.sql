-- database: c:\workspace\javascript2\zest\server\db\products.db

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT UNIQUE NOT NULL,
    description TEXT,
    image TEXT NOT NULL UNIQUE,
    SKU TEXT NOT NULL, 
    price INTEGER,
    brand TEXT,
    publishDate INTEGER,
    category TEXT NOT NULL CHECK (category IN ('Lighting', 'Interior', 'Furniture'))
);


INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Arcs Vase',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240820125321/globalassets/inriver/integration/service/arcs-vase_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    1299,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Empire Vase',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20241213081355/globalassets/inriver/integration/service/empire-vase-_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    709,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Shadow Vase',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240903114411/globalassets/inriver/integration/service/jessica-hans-shadow-vase_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    1049,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Juice Vase',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103218/globalassets/inriver/integration/service/juice-vase_910x1100_brandmodel.jpg?w=1200',
    AAA123,
    '2299',
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Morrocan Vase',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103217/globalassets/inriver/integration/service/moroccan-vase_brandmodel.jpg?w=1200',
    'AAA123',
    2299,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Hexagon Candle',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240731111528/globalassets/inriver/integration/service/hexagon-candle_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    189,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Flare Candleholder',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240903113320/globalassets/inriver/integration/service/flare-candleholder_910x1100_brandmodel2.jpg?w=1200',
    'AAA123',
    329,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Arcs candleholder',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103210/globalassets/inriver/integration/service/arcs-candleholder_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    399,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Soft candleholder',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103209/globalassets/inriver/integration/service/ws-soft-candleholder_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    659,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Mini Conical candle',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220901104454/globalassets/inriver/integration/service/mini-conical-candle_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    95,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Square candle',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240731111533/globalassets/inriver/integration/service/square-candle_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    189,
    'HAY',
    1710355200,
    'Interior'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Matin Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240212032119/globalassets/inriver/integration/service/matin-pendant_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    1688,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'PC Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103324/globalassets/inriver/integration/service/pc-pendant_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    1688,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Nelson Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103324/globalassets/inriver/integration/service/nelson-pendant_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    7299,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Apex Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20241213081340/globalassets/inriver/integration/service/apex-floor-lamp_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    3049,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Pao Steel Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240415114213/globalassets/inriver/integration/service/pao-steel-floor-lamp_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    5599,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'LBM Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240820125324/globalassets/inriver/integration/service/lbm-table-lamp_910x1100_brandmodel2.jpg?w=1200',
    'AAA123',
    2049,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Matin Table Lamp',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103322/globalassets/inriver/integration/service/matin-table-lamp_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    2889,
    'HAY',
    1710355200,
    'Lighting'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Shim Coffee Table',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20240731011129/globalassets/inriver/integration/service/shim-coffee-table_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    2399,
    'HAY',
    1710355200,
    'Furniture'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Arcs Side Table ',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20230720125220/globalassets/inriver/integration/service/arcs-trolley_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    1688,
    'HAY',
    1710355200,
    'Furniture'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Kofi Coffee Table ',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20220826103148/globalassets/inriver/integration/service/kofi_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    5749,
    'HAY',
    1710355200,
    'Furniture'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Rebar Side Table ',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20230126125122/globalassets/inriver/integration/service/rebar-side-table_910x1100_brandmodel3.jpg?w=1200',
    'AAA123',
    4099,
    'HAY',
    1710355200,
    'Furniture'
);

INSERT INTO products (
    productName,
    description,
    image,
    SKU, 
    price,
    brand, 
    publishDate,
    category
) VALUES (
    'Bella Coffee Table ',
    'lorem ipsum bla bla bla bla hfajkhfjsakjhfsa fasfsa',
    'https://www.hay.com/img_20231207015130/globalassets/inriver/integration/service/bella_910x1100_brandmodel.jpg?w=1200',
    'AAA123',
    3399,
    'HAY',
    1710355200,
    'Furniture'
);

ALTER TABLE products ADD COLUMN slug TEXT;

UPDATE products SET slug = LOWER(REPLACE(productName, ' ', '-'));

alter table products drop column slug; 
