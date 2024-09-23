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
          mark DECIMAL(2, 1) CHECK (mark BETWEEN 0.0 AND 5.0) DEFAULT NULL
          );



   INSERT INTO courses (title, discription, hours)
   VALUES ('Курс 1', 'Опис курсу 1', '2 hours'),
          ('Курс 2', 'Опис курсу 2', '3 hours 30 minutes'),
          ('Курс 3', 'Опис курсу 3', '1 hour 15 minutes'),
          ('Курс 4', 'Опис курсу 4', '4 hours'),
          ('Курс 5', 'Опис курсу 5', '2 hours 45 minutes');



   INSERT INTO students ("name", surname, birthday, phone_number, "group", gender, entered_at, departament)
   VALUES ('Іван', 'Петров', '2000-01-15', '+380501234567', 'A1', 'Male', 2018, 'Комп\`ютерні науки'),
          ('Олена', 'Сидоренко', '1999-05-22', '+380501234578', 'A1', 'Female', 2017, 'Фізика'),
          ('Сергій', 'Мельник', '2001-03-30', '+380501234589', 'B1', 'Male', 2019, 'Математика'),
          ('Марія', 'Коваленко', '2002-07-10', '+380501234590', 'B2', 'Female', 2020, 'Хімія'),
          ('Олександр', 'Іваненко', '1998-12-05', '+380501234591', 'A2', 'Male', 2016, 'Економіка'),
          ('Анна', 'Дмитрів', '2000-11-20', '+380501234592', 'B1', 'Female', 2018, 'Біологія'),
          ('Павло', 'Нечипоренко', '1997-08-15', '+380501234593', 'C1', 'Male', 2015, 'Соціологія'),
          ('Катерина', 'Гнатенко', '1999-04-25', '+380501234594', 'C2', 'Female', 2017, 'Філологія'),
          ('Дмитро', 'Кравченко', '2001-09-12', '+380501234595', 'A1', 'Male', 2019, 'Право'),
          ('Ірина', 'Левченко', '2002-06-08', '+380501234596', 'B2', 'Female', 2020, 'Архітектура'),
          ('Володимир', 'Пирог', '1998-02-18', '+380501234597', 'F1', 'Male', 2016, 'Інформатика'),
          ('Тетяна', 'Смирнова', '2000-10-30', '+380501234598', 'F2', 'Female', 2018, 'Філософія'),
          ('Юрій', 'Романенко', '2001-01-22', '+380501234599', 'G1', 'Male', 2019, 'Музика'),
          ('Світлана', 'Тимошенко', '1999-07-17', '+380501234600', 'G2', 'Female', 2017, 'Психологія'),
          ('Остап', 'Кудряшов', '2002-03-03', '+380501234601', 'A2', 'Male', 2020, 'Журналістика');



   INSERT INTO exams (id_student, id_cours, mark)
   VALUES (1, 1, 4.5),
          (1, 2, 3.0),
          (2, 1, 5.0),
          (2, 3, 4.0),
          (3, 2, 3.5),
          (3, 4, 4.2),
          (4, 1, 2.0),
          (4, 3, 5.0),
          (5, 2, 4.8),
          (5, 5, 3.6),
          (6, 4, 4.9),
          (7, 1, 3.0),
          (8, 2, 4.5),
          (9, 3, 2.5),
          (10, 5, 4.0),
          (11, 1, 3.7),
          (12, 2, 4.1),
          (13, 3, 2.9),
          (14, 4, 3.3),
          (15, 5, 4.6);



-- Відобразити, коли відбувся перший набір (мінімальний рік ступу).
   SELECT MIN(s.entered_at) AS "Minimum year of study"
     FROM students s;



--Відобразити кількість студентів, які навчаються у кожній групі.
   SELECT s."group",
          COUNT(s.id) AS student_count
     FROM students s
 GROUP BY s."group"
 ORDER BY student_count DESC;



--Відобразити загальну кількість студентів, які вступили 2018 року.
   SELECT COUNT(s.id) AS total_students_2018
     FROM students s
    WHERE s.entered_at = '2018';



--*Відобразити середній вік студентів жіночої статі кожного факультету.
   SELECT s.departament,
          AVG(
          EXTRACT(
          YEAR
               FROM AGE (s.birthday)
          )
          )::INT AS avg_women_age
     FROM students s
    WHERE gender = 'Female'
 GROUP BY s.departament
 ORDER BY avg_women_age DESC;



--Відобразити імена та прізвища студентів та назви курсів, що ними вивчаються.
   SELECT s."name" || ' ' || s.surname AS "Full name",
          c.title
     FROM students s
    INNER JOIN exams e ON e.id_student = s.id
    INNER JOIN courses c ON c.id = e.id_cours;



--Відобразити бали студента Петра Петренка з дисципліни «Основи програмування».
   SELECT s."name" || ' ' || s.surname AS "Full name",
          s.departament,
          e.mark
     FROM students s
    INNER JOIN exams e ON s.id = e.id_student
    INNER JOIN courses c ON c.id = e.id_cours
    WHERE s.name = 'Володимир'
      AND s.surname = 'Пирог'
      AND s.departament = 'Інформатика';



--Відобразити студентів, які мають бали нижче 3.5.
   SELECT s."name" || ' ' || s.surname AS "Full name",
          e.mark
     FROM students s
    INNER JOIN exams e ON s.id = e.id_student
    WHERE e.mark <= 3.5;



--Відобразити студентів, які прослухали дисципліну «Основи програмування» та мають за неї оцінку.
   SELECT s."name" || ' ' || s.surname AS "Full name",
          e.mark,
          s.departament
     FROM students s
    INNER JOIN exams e ON s.id = e.id_student
    WHERE s.departament = 'Журналістика'
      AND e.mark IS NOT NULL;