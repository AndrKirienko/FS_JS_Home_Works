//task 1

const customer = {
	name: "Test",
	surname: "Testovich",
	email: "test@test.com",
	password: "test12345",
	phone: "+380928393321",
	address: {
		city: "City",
		street: "Street",
		house: "House",
		apartment: "apartment",
	},
	printAddress() {
		console.log(this.address);
	},
	upDatePhone(newPhone) {
		this.phone = newPhone;
	},
}

customer.isMail = true;

delete customer.address;

//my test :)
customer.f1 = function () {
	console.log("dss");
};

const customer1 = { ...customer };
const customer2 = Object.assign({}, customer);

document.write(`
	<article>
		<h3>${customer2.name + " " + customer2.surname}</h3>
		<p>Email: ${customer2.email}</p>
		<p>Phone: ${customer2.phone}</p>
	</article>
`)

//task 2

const cat = {
	name: 'Murka',
	color: 'black',
	isMale: false,
	isFurnitureDamage: true,
}

for (const key in cat) {
	console.log(key + ": " + cat[key]);
}

//task 3

function constructorBook(author, name, year, city, price) {
	this.author = author;
	this.name = name;
	this.year = year;
	this.city = city;
	this.price = price;

	this.upDatePrice = function (newPrice) {
		this.price = newPrice;
	};

	this.ageBook = function() {
		return new Date().getFullYear() - Number(year)
	};
};

const book1 = new constructorBook('Test Testovich', 'Test Story', 2000, 'Test City', 500);