import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import {
  USER_LOGIN_SCHEMA,
} from '../../../utils/validationSchemas'

function UserForm() {
  const initialValues = { userLogin: '', userPassword: '' }
  const handleSubmit = (value, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_LOGIN_SCHEMA}
    >
      <Form>
        <Field type="text" name="userLogin" />
        <ErrorMessage name="userLogin" />
        <Field type="password" name="userPassword" />
        <ErrorMessage name="userPassword" />
        <button type="submit">Ok</button>
      </Form>
    </Formik>
  )
}

export default UserForm
