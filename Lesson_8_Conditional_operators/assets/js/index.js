//task 1
const isDay = true;
let isDayStyle;

isDay ? isDayStyle = 'light-theme' : isDayStyle = 'dark-theme';

//task 2

const isOnline = false;

isOnline ? alert("Ваше повідомлення відправлено") : alert("Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет");

//task 3
let inputUserPrice, discount, correctInputNumber = false;

do {
	inputUserPrice = Number(prompt("Введіть суму покупки"));

	if (!isNaN(inputUserPrice) && inputUserPrice != '' && inputUserPrice > 0) {
		correctInputNumber = true;
	}

} while (!correctInputNumber);

if (inputUserPrice >= 500 && inputUserPrice < 800) {
	discount = (inputUserPrice * 3) / 100;
	inputUserPrice -= discount
	alert("Ціна зі знижкою 3% дорівнює " + inputUserPrice + " грн")
} else if (inputUserPrice >= 800) {
	discount = (inputUserPrice * 5) / 100;
	inputUserPrice -= discount
	alert("Ціна зі знижкою 5% дорівнює " + inputUserPrice + " грн")
} else {
	alert("Ціна без знижки " + inputUserPrice + " грн")
}

//task 4
const userName = 'Test Name',
	userFemale = 'Mgfdfs',
	isLogin = true;
let userFemaleStyle = null;

switch (userFemale) {
	case 'Man':
		userFemaleStyle = 'is-male';
		break;
	case 'Woman':
		userFemaleStyle = 'is-woman';
		break;
	default:
		userFemaleStyle = 'not-female';
		break;
}

const topSectionHeader = `
<body class="${isDayStyle}">
	<header class="header wrapper">
	<a href="#">
		<img class="logo-header"

			src="./assets/images/logo.avif"
			alt=""
		/>
	</a>
	<nav class="nav-menu-header">
		<ul>
			<li><a href="#">lorem</a></li>
			<li><a href="#">lordsfs</a></li>
			<li><a href="#">ldsf</a></li>
		</ul>
	</nav>
	<div class="header-profile">
`;

const bottomSectionHeader = `
		</div>
    </header>
</body>
`;

const userNotLogged = `
	<button class="btn-login">Login</button>
	<button class="btn-register">Resister</button>
`;

const userLogged = `
	<img class="user-photo ${userFemaleStyle}" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
	<p class="user-name">${userName}</p>
`;

let userLoggedSection;

isLogin ? userLoggedSection = userLogged : userLoggedSection = userNotLogged;

document.write(
	topSectionHeader,
	userLoggedSection,
	bottomSectionHeader
)