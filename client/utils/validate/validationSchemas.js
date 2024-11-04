import * as yup from 'yup'

export const PHONE_VALIDATION_SCHEMA = yup.object({
  model: yup.string().min(2).required(),
  brand: yup.string().min(2).required(),
})
