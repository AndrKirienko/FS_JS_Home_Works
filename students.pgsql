--створення бази даних
   CREATE DATABASE students;

--створення таблиці
   CREATE TABLE students (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(50) NOT NULL,
          last_name VARCHAR(50),
          birthday DATE CHECK (birthday <= CURRENT_DATE) NOT NULL,
          phone_number CHAR(13) UNIQUE CHECK (phone_number ~ '^\+380\d{9}$') NOT NULL,
          "group" VARCHAR(10) NOT NULL,
          avg_mark SMALLINT CHECK (avg_mark BETWEEN 0 AND 100),
          gender VARCHAR(50) CHECK (gender IN ('Male', 'Female')),
          entered_at SMALLINT CHECK (
          entered_at <= EXTRACT(
          YEAR
               FROM CURRENT_DATE
          )::INT
          ),
          department VARCHAR(50) NOT NULL
          );

--додавання студентів
   INSERT INTO students (first_name, last_name, birthday, phone_number, "group", avg_mark, gender, entered_at, department)
   VALUES ('John', 'Doe', '2000-05-15', '+380123456789', 'CS101', 85, 'Male', 2018, 'Computer Science'),
          ('Jane', 'Smith', '1999-08-22', '+380987654321', 'CS102', 90, 'Female', 2017, 'Computer Science'),
          ('John', 'Johnson', '2001-03-10', '+380234567890', 'IT202', 78, 'Male', 2019, 'Information Technology'),
          ('Emma', 'Davis', '2002-11-30', '+380345678901', 'IT203', 82, 'Female', 2020, 'Information Technology'),
          ('John', 'Wilson', '1998-02-14', '+380456789012', 'CS101', 88, 'Male', 2016, 'Computer Science'),
          ('Olivia', 'Martinez', '2001-07-19', '+380567890123', 'CS101', 92, 'Female', 2019, 'Computer Science'),
          ('Liam', 'Garcia', '2000-10-05', '+380678901234', 'IT203', 80, 'Male', 2018, 'Information Technology'),
          ('Sophia', 'Johnson', '1999-01-28', '+380789012345', 'CS101', 87, 'Female', 2017, 'Computer Science'),
          ('Noah', 'Williams', '2002-04-13', '+380890123456', 'IT203', 83, 'Male', 2020, 'Information Technology'),
          ('Isabella', 'Johnson', '2001-12-24', '+380901234567', 'CS104', 89, 'Female', 2019, 'Computer Science');

--видалити таблицю
     DROP TABLE IF EXISTS students;

--отримати весь список користувачів
   SELECT *
     FROM students;

-- Отримати інформацію про студентів (ім'я+прізвище *через пробіл, дата народження) у порядку від найстаршого до наймолодшого.
   SELECT SUBSTRING(first_name, 1, 1) || '. ' || last_name AS full_name,
          birthday
     FROM students
 ORDER BY birthday;

--Отримати список шифрів груп, що не повторюються.
   SELECT DISTINCT "group"
     FROM students;

--Отримати рейтинговий список студентів (ім'я (*або ініціал)+прізвище, середній бал): спочатку студентів із найвищим середнім балом, наприкінці з найменшим.
   SELECT first_name || ' ' || last_name AS full_name,
          avg_mark
     FROM students
 ORDER BY avg_mark DESC;

--Отримати другу сторінку списку студентів під час перегляду по 3 студентів на сторінці.
   SELECT *
     FROM students
    LIMIT 3
   OFFSET 3;

--Отримати список 3-х найуспішніших студентів (ім'я, прізвище, середній бал, група).
   SELECT first_name,
          last_name,
          avg_mark,
          "group"
     FROM students
 ORDER BY avg_mark DESC
    LIMIT 3;

--* Отримати інфо про студентів (ініціал+прізвище, номер телефону), де номер телефону буде частково прихований та представлений у форматі: +38012******* (тобто видно код оператора, але не сам номер).
   SELECT SUBSTRING(first_name, 1, 1) || '. ' || last_name AS full_name,
          SUBSTRING(phone_number, 1, 6) || '*******' AS phone_number
     FROM students;

--Відобразити студентів на ім'я John та прізвище Johnson.
   SELECT *
     FROM students
    WHERE first_name = 'John'
      AND last_name = 'Doe';

--Відобразити студентів, які народилися в період із 2000 по 2001 рік.
   SELECT *
     FROM students
    WHERE EXTRACT(
          YEAR
               FROM birthday
          ) BETWEEN 2000 AND 2001;

--Відобразити студентів на ім'я Ощрт із середніми балами більше 85.
   SELECT *
     FROM students
    WHERE first_name = 'John'
      AND avg_mark BETWEEN 85 AND 100;

--*Відобразити студентів, які користуються послугами оператора Київстар. (тобто код 012 або 090 або ...)
   SELECT *
     FROM students
    WHERE phone_number ~ '^.{3}012|090.*$';

--Для студента з ім'ям Olivia змінити написання імені Olya.
   UPDATE students
      SET first_name = 'Olya'
    WHERE first_name = 'Olivia';