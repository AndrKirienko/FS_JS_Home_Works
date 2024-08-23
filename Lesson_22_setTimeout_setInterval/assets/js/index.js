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

//*Виводити посилання через певний час після завантаження сторінки. Поки посилання не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".

function showLink(interval) {
  const msgTime = document.querySelector('.msgTime')
  const link = document.querySelector('a')
  let remainingTime = interval

  function updateTime() {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    msgTime.textContent = `Зачекайте ${minutes}:${seconds}`

    if (remainingTime > 0) {
      remainingTime--
      setTimeout(updateTime, 1000)
    } else {
      msgTime.style.display = 'none'
      link.style.display = 'inline'
    }
  }
  updateTime()
}
showLink(100)
