import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { editTodo } from '../../../store/slices/todoSlice'
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validationsSchemas'
import styles from './TodoFormEdit.module.sass'

function TodoFormEdit({ id, title, edit, setEdit, isEdit }) {
  const handleCancel = () => {
    setEdit(!isEdit)
  }
  const submitHandler = values => {
    edit({ id, title: values.title })
    setEdit(!isEdit)
  }

  return (
    <Formik
      initialValues={{ title }}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.formEdit}>
        <label className={styles.labelEditForm}>
          <Field className={styles.inputEditForm} type="text" name="title" />
          <ErrorMessage
            className={styles.errorMessageEdit}
            name="title"
            component="div"
          />
        </label>
        <button className={styles.btnCancel} onClick={handleCancel}>
          Cancel
        </button>
        <button className={styles.btnSave} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  )
}

const mapStateToProps = ({ todoList }) => todoList

const mapDispatchToProps = dispatch => ({
  edit: payload => {
    dispatch(editTodo(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormEdit)
