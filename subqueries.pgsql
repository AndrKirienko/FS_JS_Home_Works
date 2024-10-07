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



--Відобразити студентів, які мають середній бал вище, ніж Івае Петров.