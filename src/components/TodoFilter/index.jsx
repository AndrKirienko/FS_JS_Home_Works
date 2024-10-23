import { Field, Form, Formik } from 'formik'

function TodoFilter() {
  const initialValues = {
    option: 'all',
  }
  const submitHandler = () => {}
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Field as="select" name="filter">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not done</option>
          </Field>
          <button type="submit">Filter</button>
        </Form>
      </Formik>
    </>
  )
}

export default TodoFilter
