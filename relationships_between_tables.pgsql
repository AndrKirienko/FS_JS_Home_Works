   CREATE DATABASE courses;



   CREATE TABLE courses (
          id SERIAL PRIMARY KEY,
          title VARCHAR(50) NOT NULL,
          discription TEXT NOT NULL,
          hours INTERVAL HOUR TO MINUTE NOT NULL
          );



   CREATE TABLE students (
          id SERIAL PRIMARY KEY,
          "name" VARCHAR(50) NOT NULL,
          surname VARCHAR(50) NOT NULL,
          birthday DATE CHECK (birthday <= CURRENT_DATE) NOT NULL,
          phone_number VARCHAR(13) UNIQUE CHECK (phone_number ~ '^\+380\d{9}$') NOT NULL,
          "group" VARCHAR(10) NOT NULL,
          gender VARCHAR(50) CHECK (gender IN ('Male', 'Female')),
          entered_at SMALLINT NOT NULL CHECK (
          entered_at <= EXTRACT(
          YEAR
               FROM CURRENT_DATE
          )::INT
          ),
          departament VARCHAR(50) NOT NULL
          );



   CREATE TABLE exams (
          id SERIAL PRIMARY KEY,
          id_student INTEGER NOT NULL REFERENCES students (id) ON UPDATE CASCADE ON DELETE CASCADE,
          id_cours INTEGER NOT NULL REFERENCES courses (id) ON UPDATE CASCADE ON DELETE CASCADE,
          mark DECIMAL(1, 1) CHECK (mark BETWEEN 0 AND 5) DEFAULT NULL
          );



   INSERT INTO courses (title, discription, hours)
   VALUES ('Курс 1', 'Опис курсу 1', '2 hours'),
          ('Курс 2', 'Опис курсу 2', '3 hours 30 minutes'),
          ('Курс 3', 'Опис курсу 3', '1 hour 15 minutes'),
          ('Курс 4', 'Опис курсу 4', '4 hours'),
          ('Курс 5', 'Опис курсу 5', '2 hours 45 minutes');