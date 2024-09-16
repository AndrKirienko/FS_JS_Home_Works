const { CREATE_TASK_VALIDATION_SCHEMA } = require('../utils/validationSchemas')

module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req

  try {
    const validatedTask = await CREATE_TASK_VALIDATION_SCHEMA.validate(body)
    req.body = validatedTask

    next()
  } catch (err) {
    res.status(422).send(err.errors)
    next()
  }
}
