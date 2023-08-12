CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  price NUMERIC NOT NULL,
  stock_quantity INTEGER NOT NULL
);

-- Inserting sample data into the products table
INSERT INTO products (product_name, category, price, stock_quantity)
VALUES
  ('Product A', 'Electronics', 49.99, 100),
  ('Product B', 'Clothing', 29.95, 50),
  ('Product C', 'Home Decor', 39.99, 75),
  ('Product D', 'Electronics', 199.99, 25),
  ('Product E', 'Books', 14.99, 120),
  ('Product F', 'Clothing', 35.50, 60);