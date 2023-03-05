CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    tax_percentage decimal(4,2) NOT NULL CHECK (tax_percentage >= 0) DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    price decimal(10,2) NOT NULL CHECK (price >= 0),
    category_id int NOT NULL REFERENCES categories,
    available_amount int NOT NULL CHECK (available_amount >= 0) DEFAULT 0,
    measurement varchar(15) NOT NULL DEFAULT 'unit',
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    finished boolean NOT NULL DEFAULT FALSE,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS sales_products (
    id SERIAL PRIMARY KEY,
    sale_id int NOT NULL REFERENCES sales,
    product_id int NOT NULL REFERENCES products,
    amount int NOT NULL CHECK (amount >=  0) DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP);