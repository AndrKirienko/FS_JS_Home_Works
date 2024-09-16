const yup = require('yup')

const TITLE_VALIDATION_SCHEMAS = yup.string().trim().min(2).max(50)
const BODY_VALIDATION_SCHEMAS = yup.string().trim().min(2).max(100)
const IS_DONE_VALIDATION_SCHEMAS = yup.boolean()

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMAS.required(),
  body: BODY_VALIDATION_SCHEMAS.required(),
  isDone: IS_DONE_VALIDATION_SCHEMAS.required(),
})

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMAS,
  body: BODY_VALIDATION_SCHEMAS,
  isDone: IS_DONE_VALIDATION_SCHEMAS,
})
