let a = 2, b = 3;
console.log("a * b =", a * b);

let c = 72, d = 9;
console.log("c / d =", c / d);

let e = 5, f = 1;
console.log("e + f =", e + f);

let intVar = 11, boolVar = true, stringVar = "java script", intStingVar = "100";
console.log(intVar, boolVar, stringVar, intStingVar);

let num = 1;
num += 11;
console.log(num)
num -= 11;
console.log(num)
num *= 11;
console.log(num)
num /= 11;
console.log(num)
num += 1;
console.log(num)
num -= 1;
console.log(num)

let squareNumber = prompt("Введіть число для піднечення до квадрату:", 3);
console.log("Число", squareNumber, "в квадраті", squareNumber ** 2);

let firstNumber = prompt("Введіть перше число для знаходження сернього арифметичного значення:", 5);
let secondNumber = prompt("Введіть друге число для знаходження сернього арифметичного значення:", 9);
console.log("Середне значення числа", firstNumber, "та", secondNumber, "=", (Number(firstNumber) + Number(secondNumber)) / 2);

let minutesVar = prompt("Введіть кількість хвилин для перетворення на секунди:", 6);
console.log("Кількість секунд в", minutesVar, "хвилин =", +minutesVar * 60);

let greeting = "Hello";
const USER_NAME = prompt("Введіть своє ім'я:", "Vasya");
document.write(
	`<p> ${greeting}, ${USER_NAME}!</p>`
)

let userName = prompt("Введіть ім'я:", "Андрій");
let userSurname = prompt("Введіть призвище:", "Кірієнко");
let userEmail = prompt("Введіть email:", "ndrw.iieo@gmail.com");
let userPhone = prompt("Введіть номер телефону:", "+380956754763");
let userAge = prompt("Введіть кількість повноціних років", "19");
let userPhoto = prompt("Вкажіть посилання на зображення", "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D");

document.write(
	`
	<article class="user-card">
		<img class="user-photo" src="${userPhoto}" alt="">
		<div class="user-card-main">
			<p class="user-name">${userName} ${userSurname}</p>
			<p class="user-age">Про мене: ${userAge} років</p>
			<div class="feedback">
				<p class="user-email"><i class="fa-regular fa-envelope"></i>${userEmail}</p>
				<p class="user-phone"><i class="fa-solid fa-phone"></i>${userPhone}</p>
			</div>
		</div>
	</article>
	`
)
