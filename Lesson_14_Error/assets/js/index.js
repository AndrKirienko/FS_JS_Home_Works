//1

function pow(base, exponent){

	if(typeof base !== 'number' || typeof exponent !== 'number'){
		throw new Error ("base and exponent must be number");
	}
	if(base <= 0 || exponent <= 0){
		throw new Error ("base and exponent mest be positive");
	}
	return base ** exponent;
}

try{
	console.log(pow(6, 0));
}catch (error){
	console.log(error);
}

//2

function validateEmail(email){

	if(typeof email !== 'string'){
		throw new Error("Email must be srting");
	}
	if(!email.includes("@")){
		throw new Error("Email must have '@'");
	}
	if(email.indexOf('@') <= 0){
		throw new Error ("@ should not be at the beginning")
	}
	if(email.includes('@', --email.length)){
		throw new Error("@ doesn't have to be at the end");
	}
	
	return email;
}

try{
	console.log(validateEmail('ihkh@dddsf'));
}catch(error){
	console.log(error);
}

