import { connect } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validationsSchemas.js'
import { createTodo } from '../../../store/slices/todoSlice.js'

function TodoFormik({ styles, create }) {
  const initialValues = {
    title: '',
  }

  const submitHandler = (values, { resetForm }) => {
    console.log(values)
    create(values)
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <label className={styles.labelForm}>
          <Field
            className={styles.inputForm}
            type="text"
            name="title"
            placeholder="Todo"
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="title"
            component="div"
          />
        </label>
        <button className={styles.btnAdd} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createTodo(values)),
})

export default connect(null, mapDispatchToProps)(TodoFormik)
