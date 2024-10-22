import * as yup from 'yup'

export const TODO_VALIDATION_SCHEMA = yup.object({
  title: yup.string().trim().min(2).max(100).required(),
})
