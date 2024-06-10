//Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).

const map = new Map([
  [1, 'first'],
  [3, 'third'],
])

//Отримайте кількість елементів

console.log(map.size)

//Додати та видалити елемент.
map.delete(3)
map.set(2, 'second')

//Здійсніть пошук за ключом
console.log(map.get(2))

//Перевірити, чи є в мапі числівник для числа 2.
console.log(map.has(2))

//Отримайте список ключів та значень окремо.
console.log(map.keys())
console.log(map.values())

//Написати функцію, яка перероблятиме текст з числами

const phrase =
  'This year I will enter the 1 grade. I have two brothers. I am the 2 child of my parents.'

function replacement(phrase) {
  return phrase
    .split(' ')
    .map(w => (map.has(Number(w)) ? map.get(Number(w)) : w))
    .join(' ')
}

console.log(replacement(phrase))
