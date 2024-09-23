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