import { Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { filterTodo } from '../../store/slices/todoSlice'
import styles from './TodoFilter.module.sass'

function TodoFilter({ filter }) {
  const initialValues = {
    filter: 'all',
  }
  const submitHandler = (values, { resetForm }) => {
    filter(values)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form className={styles.filterWrapper}>
          <Field className={styles.selectSection} as="select" name="filter">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not done</option>
          </Field>
          <button className={styles.btnFilter} type="submit">
            Filter
          </button>
        </Form>
      </Formik>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  filter: values => dispatch(filterTodo(values)),
})

export default connect(null, mapDispatchToProps)(TodoFilter)
