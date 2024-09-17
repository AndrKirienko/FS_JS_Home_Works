import * as yup from 'yup'

export const USER_LOGIN_SCHEMA = yup.object({
  userLogin: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),

  userPassword: yup
    .string()
    .trim()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    )
    .required(),
})
