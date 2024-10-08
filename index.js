const { Op } = require('sequelize')
const { sequelize, Phones } = require('./models')

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log('Sync Ok')
//   })
//   .catch(err => {
//     console.log(err)
//  })

//
;(async () => {
  try {
    const phones = [
      {
        model: 'iPhone 13',
        brand: 'Apple',
        date_release: '2024-09-24',
        ram: 6,
        processor: 'A15 Bionic',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Galaxy S21',
        brand: 'Samsung',
        date_release: '2024-01-29',
        ram: 8,
        processor: 'Exynos 2100',
        diagonal: 6.2,
        NFC: true,
      },
      {
        model: 'Pixel 6',
        brand: 'Google',
        date_release: '2022-10-28',
        ram: 8,
        processor: 'Google Tensor',
        diagonal: 6.4,
        NFC: true,
      },
      {
        model: 'OnePlus 9',
        brand: 'OnePlus',
        date_release: '2021-03-23',
        ram: 12,
        processor: 'Snapdragon 888',
        diagonal: 6.55,
        NFC: true,
      },
      {
        model: 'Xperia 1 III',
        brand: 'Sony',
        date_release: '2021-07-01',
        ram: 12,
        processor: 'Snapdragon 888',
        diagonal: 6.5,
        NFC: true,
      },
      {
        model: 'Nokia 8.3 5G',
        brand: 'Nokia',
        date_release: '2020-12-15',
        ram: 8,
        processor: 'Snapdragon 765G',
        diagonal: 6.81,
        NFC: true,
      },
      {
        model: 'Asus ROG Phone 5',
        brand: 'Asus',
        date_release: '2021-03-10',
        ram: 16,
        processor: 'Snapdragon 888',
        diagonal: 6.78,
        NFC: true,
      },
      {
        model: 'Huawei P40 Pro',
        brand: 'Huawei',
        date_release: '2020-03-26',
        ram: 8,
        processor: 'Kirin 990 5G',
        diagonal: 6.58,
        NFC: true,
      },
      {
        model: 'LG Velvet',
        brand: 'LG',
        date_release: '2020-05-15',
        ram: 8,
        processor: 'Snapdragon 765G',
        diagonal: 6.8,
        NFC: true,
      },
      {
        model: 'Motorola Edge 20 Pro',
        brand: 'Motorola',
        date_release: '2021-08-19',
        ram: 12,
        processor: 'Snapdragon 870',
        diagonal: 6.7,
        NFC: true,
      },
      {
        model: 'Oppo Find X3 Pro',
        brand: 'Oppo',
        date_release: '2021-03-11',
        ram: 12,
        processor: 'Snapdragon 888',
        diagonal: 6.7,
        NFC: true,
      },
      {
        model: 'Xiaomi Mi 11 Ultra',
        brand: 'Xiaomi',
        date_release: '2021-04-02',
        ram: 12,
        processor: 'Snapdragon 888',
        diagonal: 6.81,
        NFC: true,
      },
      {
        model: 'Realme GT',
        brand: 'Realme',
        date_release: '2021-03-04',
        ram: 8,
        processor: 'Snapdragon 870',
        diagonal: 6.43,
        NFC: true,
      },
      {
        model: 'Sony Xperia 5 II',
        brand: 'Sony',
        date_release: '2020-09-29',
        ram: 8,
        processor: 'Snapdragon 865',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Google Pixel 5',
        brand: 'Google',
        date_release: '2020-10-15',
        ram: 8,
        processor: 'Snapdragon 765G',
        diagonal: 6.0,
        NFC: true,
      },
      {
        model: 'Samsung Galaxy Note 20 Ultra',
        brand: 'Samsung',
        date_release: '2020-08-21',
        ram: 12,
        processor: 'Snapdragon 865+',
        diagonal: 6.9,
        NFC: true,
      },
      {
        model: 'iPhone 12 Pro',
        brand: 'Apple',
        date_release: '2020-10-23',
        ram: 6,
        processor: 'A14 Bionic',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Samsung Galaxy Z Fold 3',
        brand: 'Samsung',
        date_release: '2021-08-27',
        ram: 12,
        processor: 'Snapdragon 888',
        diagonal: 7.6,
        NFC: true,
      },
      {
        model: 'Xiaomi Redmi Note 10 Pro',
        brand: 'Xiaomi',
        date_release: '2021-03-04',
        ram: 6,
        processor: 'Snapdragon 732G',
        diagonal: 6.67,
        NFC: true,
      },
      {
        model: 'Huawei Mate 40 Pro',
        brand: 'Huawei',
        date_release: '2021-10-22',
        ram: 8,
        processor: 'Kirin 9000',
        diagonal: 6.76,
        NFC: true,
      },
      {
        model: 'iPhone 11',
        brand: 'Apple',
        date_release: '2019-09-20',
        ram: 4,
        processor: 'A13 Bionic',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Galaxy S10',
        brand: 'Samsung',
        date_release: '2019-03-08',
        ram: 8,
        processor: 'Exynos 9820',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Pixel 4',
        brand: 'Google',
        date_release: '2019-10-24',
        ram: 6,
        processor: 'Snapdragon 855',
        diagonal: 5.7,
        NFC: true,
      },
      {
        model: 'OnePlus 7',
        brand: 'OnePlus',
        date_release: '2019-05-14',
        ram: 8,
        processor: 'Snapdragon 855',
        diagonal: 6.41,
        NFC: true,
      },
      {
        model: 'LG G8 ThinQ',
        brand: 'LG',
        date_release: '2019-03-08',
        ram: 6,
        processor: 'Snapdragon 855',
        diagonal: 6.1,
        NFC: true,
      },
      {
        model: 'Nokia 7.2',
        brand: 'Nokia',
        date_release: '2019-09-06',
        ram: 6,
        processor: 'Snapdragon 660',
        diagonal: 6.3,
        NFC: false,
      },
      {
        model: 'Sony Xperia 1',
        brand: 'Sony',
        date_release: '2019-05-30',
        ram: 6,
        processor: 'Snapdragon 855',
        diagonal: 6.5,
        NFC: true,
      },
      {
        model: 'iPhone 6',
        brand: 'Apple',
        date_release: '2014-09-19',
        ram: 1,
        processor: 'A8',
        diagonal: 4.7,
        NFC: true,
      },
      {
        model: 'Galaxy S5',
        brand: 'Samsung',
        date_release: '2014-04-11',
        ram: 2,
        processor: 'Exynos 5420',
        diagonal: 5.1,
        NFC: true,
      },
      {
        model: 'HTC One M8',
        brand: 'HTC',
        date_release: '2014-03-25',
        ram: 2,
        processor: 'Snapdragon 801',
        diagonal: 5.0,
        NFC: true,
      },
      {
        model: 'Nokia Lumia 930',
        brand: 'Nokia',
        date_release: '2014-07-02',
        ram: 2,
        processor: 'Snapdragon 800',
        diagonal: 5.0,
        NFC: true,
      },
      {
        model: 'Sony Xperia Z2',
        brand: 'Sony',
        date_release: '2014-03-10',
        ram: 3,
        processor: 'Snapdragon 801',
        diagonal: 5.2,
        NFC: true,
      },
      {
        model: 'LG G3',
        brand: 'LG',
        date_release: '2014-05-27',
        ram: 3,
        processor: 'Snapdragon 801',
        diagonal: 5.5,
        NFC: true,
      },
      {
        model: 'Samsung Galaxy Note 4',
        brand: 'Samsung',
        date_release: '2014-10-17',
        ram: 3,
        processor: 'Snapdragon 805',
        diagonal: 5.7,
        NFC: true,
      },
    ]

    //!додавання телефонів
    //const createPhones = await Phones.bulkCreate(phones)

    //!отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),
    // const page = 3
    // const results = 4

    // const foundPhones = await Phones.findAll({
    //   limit: results,
    //   offset: (page - 1) * results,
    //   raw: true,
    // })
    // console.log(foundPhones)

    //!отримання списку телефонів поточного року видання
    // const currentYear = new Date().getFullYear()

    // const foundPhones = await Phones.findAll({
    //   where: sequelize.where(
    //     sequelize.fn('EXTRACT', sequelize.literal('YEAR FROM "date_release"')),
    //     currentYear
    //   ),
    //   raw: true,
    // })
    // console.log(foundPhones)

    //!отримання списку телефонів старше 2022 року випуску
    // const foundPhones = await Phones.findAll({
    // 	order: [['date_release', 'DESC']],
    //   where: {
    //     date_release: {
    //       [Op.lte]: new Date('2022-12-31'), // телефони старші за 2022 рік
    //     },
    //   },
    //   raw: true,
    // })

    // console.log(foundPhones)

    //!оновлення: змінити розмір оперативної пам'яті телефону з id: 1
    // const updatePhone = await Phones.update(
    //   { ram: 9 },
    //   { where: { id: 1 }, returning: true, raw: true }
    // )
    // console.log(updatePhone)

    //!оновлення: прибрати нфс всім телефонам 2020 року випуску,
    // const updatePhones = await Phones.update(
    //   { NFC: false },
    //   {
    //     where: {
    //       date_release: { [Op.gte]: '2020-01-01', [Op.lte]: '2020-12-31' },
    //     },
    //     returning: true,
    //     raw: true,
    //   }
    // )
    // console.log(updatePhones)

    //!видалення телефону з id: 2.
    // const deletePhone = await Phones.destroy({ where: { id: 2 } })
    // console.log(deletePhone)

    //!видалення телефонів 2014 року випуску.
    // const deletePhones = await Phones.destroy({
    //   where: sequelize.where(
    //     sequelize.fn('EXTRACT', sequelize.literal('YEAR FROM "date_release"')),
    //     2014
    //   ),
    // })
    // console.log(deletePhones)

    //!вивести середній розмір оперативної пам'яті телефонів
    // const findPhones = await Phones.findAll({
    //   attributes: [[sequelize.fn('AVG', sequelize.col('ram')), 'avg_ram']],
    //   raw: true,
    // })
    // console.log(findPhones)

    //!вивести кількість телефонів кожного бренду
    // const findPhones = await Phones.findAll({
    //   attributes: [
    //     'brand',
    //     [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
    //   ],
    //   group: [['brand']],
    //   raw: true,
    // })
    // console.log(findPhones)

    //!вивести бренди, у телефонів яких максимальна діагональ більше за 6.6
    // const foundPhones = await Phones.findAll({
    //   attributes: ['model', 'diagonal'],
    //   where: { diagonal: { [Op.gt]: 6.6 } },
    //   raw: true,
    // })
    // console.log(foundPhones)
  } catch (err) {
    console.log(err)
  }
})()
