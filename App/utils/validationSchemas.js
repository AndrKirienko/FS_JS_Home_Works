const yup = require('yup')

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: yup.string().trim().min(2).max(50).required(),
  body: yup.string().trim().min(2).max(100).required(),
  isDone: yup.boolean().required(),
})