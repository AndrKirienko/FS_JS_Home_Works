'use strick'

//- Використовуючи setInterval
function printNumber(from, to, interval) {
  
	const timeId = setInterval(printNumberToConsole, interval)
  
	function printNumberToConsole() {
    console.log(from)
    if (from === to) {
      clearInterval(timeId)
    }
    from++
  }
}

printNumber(5, 10, 1000)


//- *Використовуючи рекурсивний setTimeout
