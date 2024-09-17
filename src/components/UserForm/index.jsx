import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const USER_NAME_SCHEMA = yup.object({
  userLogin: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),
})

function UserForm() {
  const initialValues = { userLogin: '' }
  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_NAME_SCHEMA}
    >
      {formikProps => {
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <input
              type="text"
              name="userLogin"
              value={formikProps.values.userLogin}
              onChange={formikProps.handleChange}
            />
            {formikProps.errors.userLogin && (
              <span>{formikProps.errors.userLogin}</span>
            )}
            <button type="submit" disabled={!formikProps.dirty}>
              Ok
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default UserForm
