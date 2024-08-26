export const SING_UP_FORM_REG_EXP = {
  name: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
}
