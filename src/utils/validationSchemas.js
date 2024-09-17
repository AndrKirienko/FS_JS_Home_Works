import * as yup from 'yup'

export const USER_NAME_SCHEMA = yup.object({
  userLogin: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),
})
