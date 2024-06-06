function User(id, name, surname, age, isMale, email, isSubscribed) {
	this.id = id;
	this.firstName = name;
	this.lastName = surname;
	this.age = age;
	this.isMale = isMale;
	this.email = email;
	this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
	const user = new User(
		i + 1,
		`Username${i}`,
		`Usersurname${i}`,
		Math.floor(Math.random() * 90),
		Math.random() < 0.5,
		`useremail${i}@gmail.com`,
		Math.random() < 0.5
	);
	users.push(user);
}

//прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.

User.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName;
}

//Отримати масив користувачів, які не підписані (not subscribed).

const usersNotSubscribed = users.filter(user => user.isSubscribed === false);

//Вивести список повних імен користувачів.

const usersFullName = users.map(user => user.firstName + " " + user.lastName)

//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

function fullNameSchoolWomen(user) {
	if (user.age >= 6 && user.age <= 18) {
		return user.getFullName();
	}
}

const usersSchoolWomen = users.filter(fullNameSchoolWomen);

//Видалити з масиву користувача з email  useremail5@gmail.com.

const usersIDDelete = users.findIndex(user => user.email === 'useremail5@gmail.com');

users.splice(usersIDDelete, 1);

//Змінити email користувачу з id 2 (можна спробувати використати find).

users.find(user => user.id === 2).email = 's@gmail.com';

//Визначити, який відсоток користувачів підписані (subscribed)

function percentageSubscribedUsers(user) {
	const countUserSubscribed = users.filter(user => user.isSubscribed === true);
	return Math.round((countUserSubscribed.length * 100) / user.length);
}

percentageSubscribedUsers(users);

//Знайти середній вік користувачів (спробувати використати reduce).

function countAverageAge(currentValue, index, array) {
	return currentValue.age / array.length;
}
const averageAge = Math.round(users.map(countAverageAge).reduce((previousValue, currentValue) => previousValue + currentValue));

//варіант 2

const averageAgeVar2 = Math.round(users.reduce((sum, { age }) => sum + age, 0) / users.length);

//Впорядкувати користувачів за віком (sort).

const sortAge = users.sort((a, b) => a.age - b.age);

//Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.

const emailUser7 = users.some(user => user.email === 'useremail7@gmail.com')

//Перевірити, чи всі користувачі підписані (subscribed).

const usersAllSubscribed = users.every(user => user.isSubscribed === true)