
//0
let arr = [];

for (let i = 0; i < 10; i++) {
	let number = Math.floor(Math.random() * 100);
	if (number > 0) {
		arr.push(number);
	} else {
		i--;
	}
}

//1
arr.shift();
arr.pop();
arr.push(Math.floor(Math.random() * 100));
arr.unshift(Math.floor(Math.random() * 100));

//2
console.log(arr.length);

//3
const arr1 = [...arr];
const arr2 = Array.from(arr);

//4
let arrT4 = [];

for (let i = 2; i < arr.length; i += 2) {
	arrT4.push(arr[i]);
}

console.log(arrT4);

//5
let mulNum = 1;

for (let i = 0; i < arr.length; i++) {
	mulNum *= arr[i];
}

//6
const phones = [
	{ id: 1, brand: "Apple", model: "X", color: "Black", price: 999, RAM: 12 },
	{ id: 2, brand: "Samsung", model: "S20", color: "White", price: 899, RAM: 8 },
	{ id: 3, brand: "Xiaomi", model: "Note 10", color: "Blue", price: 499, RAM: 6 },
	{ id: 4, brand: "Huawei", model: "P40", color: "Red", price: 599, RAM: 8 },
	{ id: 5, brand: "OnePlus", model: "8T", color: "Green", price: 699, RAM: 12 },
	{ id: 6, brand: "Apple", model: "X", color: "White", price: 899, RAM: 4 },
	{ id: 7, brand: "Samsung", model: "S20", color: "Black", price: 799, RAM: 6 },
	{ id: 8, brand: "Xiaomi", model: "Note 10", color: "Red", price: 499, RAM: 8 },
	{ id: 9, brand: "Huawei", model: "P40", color: "Blue", price: 649, RAM: 6 },
	{ id: 10, brand: "OnePlus", model: "8T", color: "Black", price: 749, RAM: 12 }
];

for (let i = 0; i < phones.length; i++) {
	document.write(`
	<article class="phone-card">
		<h3 class="phone-title">${phones[i].brand} ${phones[i].model}</h3>
		<p>${phones[i].color}</p>
		<p>${phones[i].RAM} Gb</p>
		<p class="phone-price">${phones[i].price} $</p>
	</article>
	`)
}

let sum = null;

for (let i = 0; i < phones.length; i++) {
	sum += phones[i].price;
}

const averagePrice = sum / phones.length;

let countRAM = { 4: null, 6: null, 8: null, 12: null };

for (let i = 0; i < phones.length; i++) {

	let RAM = phones[i].RAM;

	switch (RAM) {
		case 4:
			++countRAM[4]; break;
		case 6:
			++countRAM[6]; break;
		case 8:
			++countRAM[8]; break;
		case 12:
			++countRAM[12]; break;
	}
}

//8
const arrFilt = [3, 3, -3, 3, 3];
const arrT8 = arrFilt.filter(el => el !== 0);

//9
const arrMap = [99, 5, 0, 9, 30];
const arrT9 = arrMap.map(el => el / 100);

//10
const arrForEach = [...arrFilt];
arrForEach.forEach(el => el ** 3);

//11
const arrIndex = Array.from(arrFilt);

const index = arrIndex.findIndex(index => index ** 2 === 100);

if (index === -1) {
	console.log("There's no element");
} else {
	arrIndex.splice(4, 1);
}

//13
function simpleNumber(number) {
	if (number <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

const couples = arrFilt.every(el => el % 2 === 0);
const simple = arrFilt.every(simpleNumber);

//14
const negative = arrFilt.some(el => el < 0);



