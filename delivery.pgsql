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



   CREATE TABLE ingredients (id SERIAL PRIMARY KEY, title VARCHAR(50) NOT NULL);



   CREATE TABLE dishes_to_ingredients (
          id SERIAL PRIMARY KEY,
          id_dishes INTEGER REFERENCES dishes (id) ON UPDATE CASCADE ON DELETE RESTRICT,
          id_ingredients INTEGER REFERENCES ingredients (id) ON UPDATE CASCADE ON DELETE RESTRICT,
          quantity_ingredients SMALLINT NOT NULL
          );



   INSERT INTO customers ("name", surname)
   VALUES ('Олександр', 'Петренко'),
          ('Марія', 'Шевченко'),
          ('Іван', 'Коваль'),
          ('Олена', 'Мельник'),
          ('Сергій', 'Іваненко'),
          ('Юлія', 'Гончаренко'),
          ('Дмитро', 'Василенко'),
          ('Ольга', 'Кравченко'),
          ('Андрій', 'Ткаченко'),
          ('Наталія', 'Гриценко'),
          ('Олег', 'Лисенко'),
          ('Ірина', 'Коваленко'),
          ('Тарас', 'Бондар'),
          ('Світлана', 'Захарченко'),
          ('Микола', 'Олексієнко');



   INSERT INTO orders (created_ad, total_price, id_customer)
   VALUES ('2024-10-06', 350.50, 1),
          ('2024-09-28', 450.00, 2),
          ('2024-09-25', 300.00, 3),
          ('2024-09-18', 275.75, 4),
          ('2024-09-15', 120.90, 5),
          ('2024-09-12', 500.00, 6),
          ('2024-09-10', 230.00, 7),
          ('2024-09-09', 400.00, 8),
          ('2024-09-06', 150.50, 9),
          ('2024-09-05', 200.00, 10),
          ('2024-09-03', 600.00, 11),
          ('2024-09-02', 100.00, 12),
          ('2024-09-01', 275.50, 13),
          ('2024-08-30', 155.30, 14),
          ('2024-08-28', 450.80, 15);



   INSERT INTO dishes (title, weigth, price)
   VALUES ('Суші з лососем', 200, 120.50),
          ('Рол Каліфорнія', 250, 140.00),
          ('Суші з тунцем', 180, 130.75),
          ('Рол з креветками', 230, 155.20),
          ('Філадельфія', 220, 145.30),
          ('Рол з вугрем', 240, 165.50),
          ('Суші з окунем', 200, 110.00),
          ('Салат Чука', 180, 90.25),
          ('Нігірі з лососем', 150, 85.00),
          ('Суші з креветками', 180, 130.10),
          ('Рол Токіо', 250, 155.75),
          ('Рол Дракон', 270, 175.80),
          ('Темпура', 260, 180.60),
          ('Рол Вулкан', 300, 165.90),
          ('Макі з огірком', 120, 70.45);