   CREATE DATABASE delivery;



   CREATE TABLE customers (
          id SERIAL PRIMARY KEY,
          "name" VARCHAR(50) NOT NULL,
          surname VARCHAR(50) NOT NULL
          )