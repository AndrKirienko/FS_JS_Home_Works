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