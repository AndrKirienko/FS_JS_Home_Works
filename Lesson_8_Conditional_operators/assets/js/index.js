let isDay = true;
let isDayStyle;

if (isDay) {
	isDayStyle = 'light-theme';
} else {
	isDayStyle = 'dark-theme';
}





//task 4
const userName = 'Test Name', userFemale = 'Woman';
let userFemaleStyle = null;
let isLogin = true;

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

if (isLogin) {
	userLoggedSection = userLogged;
} else {
	userLoggedSection = userNotLogged;
}

document.write(
	topSectionHeader,
	userLoggedSection,
	bottomSectionHeader
)