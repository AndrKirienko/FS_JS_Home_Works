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
function printNumberTimeout(from, to, interval) {
  function printNumberTimeout() {
    console.log(from, '-> setTimeout')

    if (from < to) {
      from++
      setTimeout(printNumberTimeout, interval)
    }
  }
  setTimeout(printNumberTimeout, interval)
}

printNumberTimeout(1, 5, 1000)
