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



   INSERT INTO orders_to_dishes (id_orders, id_dishes, quantity_dishes)
   VALUES (1, 1, 2),
          (1, 2, 1),
          (2, 3, 2),
          (2, 4, 1),
          (3, 5, 3),
          (3, 6, 2),
          (4, 7, 1),
          (5, 8, 1),
          (6, 9, 2),
          (7, 10, 3),
          (8, 11, 1),
          (9, 12, 2),
          (10, 13, 1),
          (11, 14, 2),
          (12, 15, 3);



   INSERT INTO ingredients (title)
   VALUES ('Лосось'),
          ('Тунець'),
          ('Рис'),
          ('Креветки'),
          ('Авокадо'),
          ('Вугор'),
          ('Окунь'),
          ('Сир Філадельфія'),
          ('Ікра'),
          ('Норі'),
          ('Огірок'),
          ('Сир Тофу'),
          ('Соєвий соус'),
          ('Імбир'),
          ('Васабі');



   INSERT INTO dishes_to_ingredients (id_dishes, id_ingredients, quantity_ingredients)
   VALUES (1, 1, 50),
          (1, 3, 150),
          (2, 4, 100),
          (2, 5, 80),
          (3, 2, 60),
          (3, 3, 120),
          (4, 4, 70),
          (5, 1, 50),
          (5, 8, 40),
          (6, 6, 60),
          (7, 7, 50),
          (8, 13, 20),
          (9, 1, 30),
          (10, 4, 50),
          (11, 9, 45);



--склад та вартість (певного) замовлення
   SELECT c."name" || ' ' || c.surname AS customer_name,
          d.title AS dish_name,
          otd.quantity_dishes,
          d.price * otd.quantity_dishes AS total_dish_price,
          STRING_AGG(i.title, ', ') AS ingredients
     FROM orders o
     JOIN customers c ON o.id_customer = c.id
     JOIN orders_to_dishes otd ON o.id = otd.id_orders
     JOIN dishes d ON otd.id_dishes = d.id
     JOIN dishes_to_ingredients dti ON d.id = dti.id_dishes
     JOIN ingredients i ON dti.id_ingredients = i.id
    WHERE o.id = 1
 GROUP BY c."name",
          c.surname,
          d.title,
          otd.quantity_dishes,
          d.price;



--перелік замовлень за певний тиждень (страви декілька в рядку через кому)
   SELECT c."name" || ' ' || c.surname AS customer_name,
          o.created_ad,
          STRING_AGG(d.title, ', ') AS dishes,
          o.total_price
     FROM customers c
    INNER JOIN orders o ON c.id = o.id_customer
    INNER JOIN orders_to_dishes o_to_d ON o.id = o_to_d.id_orders
    INNER JOIN dishes d ON d.id = o_to_d.id_dishes
    WHERE created_ad BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE
 GROUP BY c."name",
          c.surname,
          o.total_price,
          o.created_ad;



--перелік замовлень за певний тиждень (страви одна в рядку)
   SELECT c."name" || ' ' || c.surname AS customer_name,
          o.created_ad,
          d.title AS dishes,
          o.total_price
     FROM customers c
    INNER JOIN orders o ON c.id = o.id_customer
    INNER JOIN orders_to_dishes o_to_d ON o.id = o_to_d.id_orders
    INNER JOIN dishes d ON d.id = o_to_d.id_dishes
    WHERE created_ad BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE;



--виручку за місяць (сума всіх замовлень за місяць)
   SELECT SUM(total_price) AS "Total price for the last month"
     FROM orders
    WHERE created_ad BETWEEN CURRENT_DATE - INTERVAL '1 month' AND CURRENT_DATE;



--топ 5 страв на місяць
   SELECT d.title,
          o_to_d.quantity_dishes
     FROM dishes d
    INNER JOIN orders_to_dishes o_to_d ON d.id = o_to_d.id_dishes
    INNER JOIN orders o ON o.id = o_to_d.id_orders
    WHERE created_ad BETWEEN CURRENT_DATE - INTERVAL '1 month' AND CURRENT_DATE
 ORDER BY quantity_dishes DESC
    LIMIT 5
   OFFSET 0;



--Ваш прибуток від продажу за місяць, за умови, що Ваш застосунок отримує 3% від суми замовлення
   SELECT SUM(total_price) * 0.03 AS "Total price for the last month"
     FROM orders
    WHERE created_ad BETWEEN CURRENT_DATE - INTERVAL '1 month' AND CURRENT_DATE;