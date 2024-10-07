--view students_exams
   CREATE VIEW students_exams AS
   SELECT s."name",
          s.surname,
          s.birthday,
          s.phone_number,
          s."group",
          s.gender,
          s.entered_at,
          s.departament,
          e.id_student,
          e.id_cours,
          e.mark
     FROM students s
    INNER JOIN exams e ON s.id = e.id_student;



--view student exams courses
   CREATE VIEW student_exams_courses AS
   SELECT s."name",
          s.surname,
          s.birthday,
          s.phone_number,
          s."group",
          s.gender,
          s.entered_at,
          s.departament,
          e.id_student,
          e.id_cours,
          e.mark,
          c.title,
          c.discription,
          c.hours
     FROM students s
    INNER JOIN exams e ON s.id = e.id_student
    INNER JOIN courses c ON c.id = e.id_cours;



--Отримати список студентів, у яких день народження збігається із днем народження Івана Петрова.
   SELECT *
     FROM students
    WHERE EXTRACT(
          YEAR
               FROM birthday
          ) = (
             SELECT EXTRACT(
                    YEAR
                         FROM birthday
                    )
               FROM students
              WHERE "name" = 'Іван'
                AND "surname" = 'Петров'
          );



--Відобразити студентів, які мають середній бал вище, ніж Івана Петрова.
   SELECT id_student,
          "name" || ' ' || surname AS full_name,
          AVG(mark)
     FROM students_exams
 GROUP BY id_student,
          "name",
          surname
   HAVING AVG(mark) > (
             SELECT AVG(mark)
               FROM students_exams
              WHERE "name" = 'Іван'
                AND surname = 'Петров'
          )
 ORDER BY id_student;



--Отримати список предметів, у яких кількість годин більше, ніж у "Курс 1".
   SELECT *
     FROM courses
    WHERE hours > (
             SELECT hours
               FROM courses
              WHERE title = 'Курс 1'
          );



--Отримати список 
--студент | предмет | оцінка 
--де оцінка має бути більшою за будь - яку оцінку Івана Петрова
   SELECT "name" || ' ' || surname AS fullName,
          departament,
          mark
     FROM students_exams
    WHERE mark > ANY (
             SELECT mark
               FROM students_exams
              WHERE "name" = 'Іван'
                AND surname = 'Петров'
          );



--Вивести
--студент | предмет | оцінка
--щоб оцінка виводилася у літерному вигляді "відмінно", "добре" або "задовільно".
--  SELECT "name" || ' ' || surname AS fullName,
--         departament,
--         case 
-- 				when mark BETWEEN 0 and 3.0 then 'Незадовільно'
-- 				else 'Інше'
-- 				end as mark_l
--    FROM students_exams;
   SELECT "name" || ' ' || surname AS fullName,
          departament,
          CASE
                    WHEN mark >= 0
                          AND mark < 3.0 THEN 'Незадовільно'
                              WHEN mark >= 3.0
                          AND mark <= 4.0 THEN 'Задовільно'
                              WHEN mark > 4.1
                          AND mark <= 4.5 THEN 'Добре'
                              WHEN mark > 4.6
                          AND mark <= 5.0 THEN 'Відмінно'
                              ELSE 'Інше'
          END AS mark_l
     FROM students_exams;