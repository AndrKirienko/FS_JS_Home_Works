import { Formik } from 'formik'
import React from 'react'

function UserForm() {
  const initialValues = { userName: '' }
  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => {
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <input
              type="text"
              name="userName"
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
            />
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
