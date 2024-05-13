//task 1
const numberStartTask1 = Number(25);

console.log("Loop While");
let numberStartTask1LoopWhile = numberStartTask1;
while (numberStartTask1LoopWhile >= 0) {
	console.log(numberStartTask1LoopWhile--);
}

console.log("Loop Do While");
let numberStartTask1LoopDoWhile = numberStartTask1;
do {
	console.log(numberStartTask1LoopDoWhile--)
} while (numberStartTask1LoopDoWhile >= 0);

console.log("Loop For");

for (let numberStartTask1LoopFor = numberStartTask1; numberStartTask1LoopFor >= 0; numberStartTask1LoopFor--){
	console.log(numberStartTask1LoopFor);
}