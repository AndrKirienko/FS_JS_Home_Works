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
          ('Alex', 'Brown', '2001-03-10', '+380234567890', 'IT202', 78, 'Male', 2019, 'Information Technology'),
          ('Emma', 'Davis', '2002-11-30', '+380345678901', 'IT203', 82, 'Female', 2020, 'Information Technology'),
          ('Michael', 'Wilson', '1998-02-14', '+380456789012', 'CS101', 88, 'Male', 2016, 'Computer Science');

--отримати весь список користувачів
   SELECT *
     FROM students;

-- Отримати інформацію про студентів (ім'я+прізвище *через пробіл, дата народження) у порядку від найстаршого до наймолодшого.
   SELECT first_name || ' ' || last_name AS full_name,
          birthday
     FROM students
 ORDER BY birthday;