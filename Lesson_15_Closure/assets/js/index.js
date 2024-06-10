//Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1, а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).

function count(number) {
  let count = 0

  return function () {
    return (count += number)
  }
}

const c1 = count(5)
const c2 = count(9)
c1()
c1()

//Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).

function countStar(initialValue, step) {
  let count = initialValue

  return function () {
    return (count += step)
  }
}

const cs1 = countStar(3, 1)
cs1()
