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
	correctInputNumber = !isNaN(inputUserPrice) && inputUserPrice != '' && inputUserPrice > 0;
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
	isLogin = false;
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

//task 5 

const userDayNumber = Number(prompt("Введіть номер дня тижня"));

switch (userDayNumber) {
	case 1:
		alert("Це понеділок"); break;
	case 2:
		alert("Це вівторок"); break;
	case 3:
		alert("Це середа"); break;
	case 4:
		alert("Це четверг"); break;
	case 5:
		alert("Це пятниця"); break;
	case 6:
		alert("Це субота"); break;
	case 7:
		alert("Це неділя"); break;
	default:
		alert("дня з таким номером не існує"); break;
}

//task 6

const day = Number(10);

if (day >= 1 && day <= 10) {
	alert(day + " це ПЕРША декада");
} else if (day >= 11 && day <= 20) {
	alert(day + " це ДРУГА декада");
} else if (day >= 21 && day <= 30) {
	alert(day + " це ТРЕТЯ декада");
} else {
	alert("Зі значенням " + day + " декади не виявлено");
}

//task 6.1 

const day2 = Number(265);

switch (day2) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		alert(day2 + " це ПЕРША декада"); break;
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	case 20:
		alert(day2 + " це ДРУГА декада"); break;
	case 21:
	case 22:
	case 23:
	case 24:
	case 25:
	case 26:
	case 27:
	case 28:
	case 29:
	case 30:
		alert(day2 + " це ТРЕТЯ декада"); break;
	default:
		alert("Зі значенням " + day2 + " декади не виявлено"); break;

}