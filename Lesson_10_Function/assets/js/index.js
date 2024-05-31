//task 1
const isWorkingPerson = age => age >= 16 && age <= 64;

//task 2
const checkMultiplicity = (number1, number2) => (number1 % number2) === 0;

//task 3
const isThereTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;

//task 4
const squareArea = (a) => a ** 2;

parallelepipedArea(12, 4, 3);

/**
 * @function parallelepipedArea
 * @param {number} a - length
 * @param {number} b - width
 * @param {number} c - height
 * @returns {number} area
 */

function parallelepipedArea(a, b, c) {
	return a * b * c;
}

const rectangularArea = (a, b) => a * b;

//task 5
const isSimpleNumber = number => {
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

//task 6 

const productCard = (productUrlPhoto, productName, productDescription, productPrice, productDiscount) => {

	let price;
	if (!(productDiscount === undefined)) {
		price = `
		
			<span span class = "old-price" >${productPrice}</span >
			<span class="discount-price">${Math.trunc(productPrice - (productPrice * productDiscount) / 100)} </span>
			<span>Discount: ${productDiscount}%</span>
		
		`;
	} else {
		price = `<span span class= "price" > ${productPrice}</span >`;
	}

	document.write(`
		<article class="product-card">
			<img class="product-photo" src="${productUrlPhoto}" alt="product photo">
			<h3 class="product-name">${productName}</h3>
			<p class="product-description">${productDescription}</p>
			<p>Price: ${price}</p>
		</article>
	`)
}

productCard(`https://cdn-icons-png.flaticon.com/512/1170/1170679.png`,
	`lorem`,
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, mollitia?`,
	902,
	31);

productCard(`https://cdn-icons-png.flaticon.com/512/1170/1170679.png`,
	`lorem`,
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, mollitia?`,
	900,
);

