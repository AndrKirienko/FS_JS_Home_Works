//task 1
const numberStartTask1 = Number(25);

console.log("Task 1 Loop While");
let numberStartTask1LoopWhile = numberStartTask1;
while (numberStartTask1LoopWhile >= 0) {
	console.log(numberStartTask1LoopWhile--);
}

console.log("Task 1 Loop Do While");
let numberStartTask1LoopDoWhile = numberStartTask1;
do {
	console.log(numberStartTask1LoopDoWhile--)
} while (numberStartTask1LoopDoWhile >= 0);

console.log("Task 1 Loop For");

for (let numberStartTask1LoopFor = numberStartTask1; numberStartTask1LoopFor >= 0; numberStartTask1LoopFor--) {
	console.log(numberStartTask1LoopFor);
}

//task 2
const numberStartTask2 = 10, numberEndTask2 = 50;

console.log("Task 2 Loop Do While");

let numberStartTask2LoopDoWhile = numberStartTask2, numberEndTask2LoopDoWhile = numberEndTask2;

do {
	if (numberStartTask2LoopDoWhile % 5 === 0) {
		console.log(numberStartTask2LoopDoWhile);
	}
	numberStartTask2LoopDoWhile++;
} while (numberStartTask2LoopDoWhile <= numberEndTask2LoopDoWhile);

console.log("Task 2 Loop While");

let numberStartTask2LoopWhile = numberStartTask2, numberEndTask2LoopWhile = numberEndTask2;

while (numberStartTask2LoopWhile <= numberEndTask2LoopWhile) {
	if (numberStartTask2LoopWhile % 5 === 0) {
		console.log(numberStartTask2LoopWhile);
	}
	numberStartTask2LoopWhile++;
}

console.log("Task 2 Loop For");

for (let numberStartTask2LoopFor = numberStartTask2, numberEndTask2LoopFor = numberEndTask2; numberStartTask2LoopFor <= numberEndTask2LoopFor; numberStartTask2LoopFor++) {
	if (numberStartTask2LoopFor % 5 === 0) {
		console.log(numberStartTask2LoopFor);
	}
}

