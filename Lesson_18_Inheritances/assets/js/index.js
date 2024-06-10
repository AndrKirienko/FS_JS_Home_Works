// Для базового класу Vehicle реалізувати:

// - властивості:
// --- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).

// - методи:
// --- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
// --- getAge() - повертає кількість років із дня виробництва (буде плюсом реалізувати геттером).

class Vehicle {
  constructor(dimension, brand, model, manufactureDate) {
    this._dimension = dimension
    this._brand = brand
    this._model = model
    this._manufactureDate = manufactureDate
  }

  get getFullInfo() {
    return `
    <article>
      <h2>Бренд: ${this._brand}</h2>
      <p>Модель: ${this._model}</p>
      <p>Вік: ${this.getAge}</p>
		`
  }

  get getAge() {
    return new Date().getFullYear() - this._manufactureDate
  }
}

const vehicle = new Vehicle('200x100x50', 'Toyota', 'Corolla', 2010)
document.write(vehicle.getFullInfo)
console.log(vehicle.getAge)

// Дочірній клас PassengerTransport розширюється:

// - властивостями:
// --- passengerLimit - максимальна кількість пасажирських місць,
// --- passengerCount - кількість зайнятих пасажирських місць,

// - методом addPassenger() - додає ще одного пасажира, якщо ще є вільні місця; повертає true (якщо пасажир доданий) або false (якщо не доданий, тобто вже не було вільних місць).

// Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб:
// бренд,
// модель,
// вік,
// максимальна кількість пасажирських місць.

class PassengerTransport extends Vehicle {
  constructor(
    dimension,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount,
  ) {
    super(dimension, brand, model, manufactureDate)
    this._passengerLimit = passengerLimit
    this.passengerCount = passengerCount
  }

  addPassenger() {
    if (this._passengerCount >= this._passengerLimit) {
      throw new Error(`Limit ${this._passengerLimit}`)
    }
    return ++this._passengerCount
  }

  set passengerCount(value) {
    if (value > this._passengerLimit) {
      throw new Error(`Limit ${this._passengerLimit}`)
    }
    return (this._passengerCount = value)
  }

  get getFullInfo() {
    return `
    <article>
      <h2>Бренд: ${this._brand}</h2>
      <p>Модель: ${this._model}</p>
      <p>Вік: ${this.getAge}</p>
      <p>Максимальна кількість пасажирських місць: ${this._passengerLimit}</p>
    </article>`
  }
}

try {
  const passengerTransport = new PassengerTransport(
    '250x150x60',
    'Mercedes',
    'Sprinter',
    2018,
    24,
    24,
  )
  document.write(passengerTransport.getFullInfo)
  console.log(passengerTransport.getAge)
  passengerTransport.addPassenger()
} catch (error) {
  console.log(error)
}

// Дочірній клас FreightTransport розширюється:

// - властивістю:
// --- capacity - вантажопідйомність,

// - методом checkLoadingPossibility(weight) - перевіряє, чи можна завантажити масу weight. Повертає boolean.

// Перевизначити метод getFullInfo:
// бренд,
// модель,
// вік,
// вантажопідйомність.

class FreightTransport extends Vehicle {
  constructor(dimension, brand, model, manufactureDate, capacity) {
    super(dimension, brand, model, manufactureDate)
    this._capacity = capacity
  }

  checkLoadingPossibility(weight) {
    return weight <= this._capacity
  }

  get getFullInfo() {
    return `
    <article>
      <h2>Бренд: ${this._brand}</h2>
      <p>Модель: ${this._model}</p>
      <p>Вік: ${this.getAge}</p>
			<p>Вантажопідйомність: ${this._capacity}</p>
			`
  }
}

const freightTransport = new FreightTransport(
  '500x200x300',
  'Volvo',
  'FH16',
  2015,
  20000,
)
console.log(freightTransport.getAge)
document.write(freightTransport.getFullInfo)
console.log(freightTransport.checkLoadingPossibility(3000))
