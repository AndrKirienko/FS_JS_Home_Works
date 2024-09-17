import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import { USER_LOGIN_SCHEMA } from '../../../utils/validationSchemas'
import styles from './UserForm.module.sass'
import className from 'classname'

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
      {formikProps => {
        const userLoginClassName = className(styles.input, {
          [styles.valid]:
            !formikProps.errors.userLogin && formikProps.touched.userLogin,
          [styles.invalid]:
            formikProps.errors.userLogin && formikProps.touched.userLogin,
        })
        const userPasswordClassName = className(styles.input, {
          [styles.valid]:
            !formikProps.errors.userPassword &&
            formikProps.touched.userPassword,
          [styles.invalid]:
            formikProps.errors.userPassword && formikProps.touched.userPassword,
        })
        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Login</span>
              <Field
                className={userLoginClassName}
                type="text"
                name="userLogin"
                autoFocus
              />{' '}
              {/*//current value Asdfs*/}
              <ErrorMessage
                className={styles.error}
                name="userLogin"
                component="span"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Password</span>
              <Field
                className={userPasswordClassName}
                type="password"
                name="userPassword"
              />{' '}
              {/*current value Aa1!1232dfs*/}
              <ErrorMessage
                className={styles.error}
                name="userPassword"
                component="span"
              />
            </label>
            <button type="submit" className={styles.btnSubmit}>
              Ok
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default UserForm
