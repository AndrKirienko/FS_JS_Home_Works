import { ErrorMessage, Field, Form, Formik } from 'formik'
import { TODO_VALIDATION_SCHEMA } from '../../utils/validationsSchemas'

function TodoForm() {
  const initialValues = {
    title: '',
    isDone: false,
  }

  const submitHandler = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }

  return (
    <section>
      <h2>New Todo</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TODO_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            <Field type="text" name="title" placeholder="Todo" />
            <ErrorMessage name="title" component="div" />
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </section>
  )
}

export default TodoForm
