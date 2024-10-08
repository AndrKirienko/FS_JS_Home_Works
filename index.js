const { sequelize, Phones } = require('./models')

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log('Sync Ok')
//   })
//   .catch(err => {
//     console.log(err)
//   })

//
;(async () => {
  try {
    const phone = {
      model: 'iPhone 13',
      brand: 'Apple',
      date_release: '2023-09-24',
      ram: 6,
      processor: 'A15 Bionic',
      diagonal: 6.1,
      NFC: true,
    }
    //const createdPhone = await Phones.create(phone)

    const foundPhone = await Phones.findAll({ raw: true })
    console.log(foundPhone)
  } catch (err) {
    console.log(err)
  }
})()
