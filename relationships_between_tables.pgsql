   CREATE DATABASE courses;


   CREATE TABLE courses (
          id SERIAL PRIMARY KEY,
          title VARCHAR(50) NOT NULL,
          discription TEXT NOT NULL,
          hours INTERVAL HOUR TO MINUTE NOT NULL
          );