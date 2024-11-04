import { ErrorMessage, Field, Form, Formik } from 'formik'
import styles from './PhonesForm.module.sass'
import { PHONE_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas'

const initialValues = {
  model: '',
  brand: '',
}
function PhonesForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PHONE_VALIDATION_SCHEMA}
    >
      <Form className={styles.formWrapper}>
        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="text"
            name="model"
            placeholder="model"
            autoFocus
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="model"
            component="span"
          />
        </label>
        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="text"
            name="brand"
            placeholder="brand"
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="brand"
            component="div"
          />
        </label>

        <button className={styles.btnForm} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  )
}

export default PhonesForm
