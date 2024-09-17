import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import { USER_NAME_SCHEMA } from '../../utils/validationSchemas'


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
      <Form>
        <Field type="text" name="userLogin" />
        <ErrorMessage name="userLogin" />
        <button type="submit">Ok</button>
      </Form>
    </Formik>
  )
}

export default UserForm
