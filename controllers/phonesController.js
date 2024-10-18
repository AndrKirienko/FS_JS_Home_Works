const _ = require('lodash')
const { Phones } = require('./../models')

module.exports.createPhone = async (req, res, next) => {
  const { body } = req
  try {
    const createdPhone = await Phones.create(body)

    const preparedPhone = _.omit(createdPhone.get(), ['createdAt', 'updatedAt'])

    res.status(201).send({ data: preparedPhone })
  } catch (err) {
    next(err)
  }
}
module.exports.getPhones = async (req, res, next) => {
  const {
    query: { page, results },
  } = req

  try {
    const limit = results
    const offset = (page - 1) * results

    const foundPhones = await Phones.findAll({
      attributes: { excludes: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
      raw: true,
    })

    res.status(200).send({ data: foundPhones })
  } catch (err) {
    next(err)
  }
}
module.exports.getPhoneById = async (req, res, next) => {}
module.exports.updatePhoneById = async (req, res, next) => {}
module.exports.deletePhoneById = async (req, res, next) => {}
