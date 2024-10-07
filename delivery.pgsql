   CREATE DATABASE delivery;



   CREATE TABLE customers (
          id SERIAL PRIMARY KEY,
          "name" VARCHAR(50) NOT NULL,
          surname VARCHAR(50) NOT NULL
          );



   CREATE TABLE orders (
          id SERIAL PRIMARY KEY,
          created_ad date NOT NULL CHECK (created_ad <= CURRENT_DATE),
          total_price NUMERIC(10, 5),
          id_customer INTEGER REFERENCES customers (id) ON UPDATE CASCADE
          );



   CREATE TABLE dishes (
          id SERIAL PRIMARY KEY,
          title VARCHAR(50) NOT NULL,
          weigth SMALLINT NOT NULL,
          price NUMERIC(10, 5) NOT NULL
          );



   CREATE TABLE orders_to_dishes (
          id SERIAL PRIMARY KEY,
          id_orders INTEGER REFERENCES orders (id) ON UPDATE CASCADE ON DELETE RESTRICT,
          id_dishes INTEGER REFERENCES dishes (id) ON UPDATE CASCADE ON DELETE RESTRICT,
          quantity_dishes SMALLINT NOT NULL
          );