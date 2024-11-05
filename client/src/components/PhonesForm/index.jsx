import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import styles from './PhonesForm.module.sass'
import { PHONE_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas'
import { createPhoneThunk } from '../../store/slices/phonesSlice'

const initialValues = {
  model: '',
  brand: '',
  dateRelease: '',
  ram: '',
  processor: '',
  diagonal: '',
  isNFC: false,
}
function PhonesForm({ createPhone }) {
  const handleSubmit = (values, formikBag) => {
    createPhone(values)
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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

        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="date"
            name="dateRelease"
            placeholder="Date Release"
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="dateRelease"
            component="div"
          />
        </label>

        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="number"
            name="ram"
            placeholder="RAM (GB)"
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="ram"
            component="div"
          />
        </label>

        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="text"
            name="processor"
            placeholder="Processor"
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="processor"
            component="div"
          />
        </label>

        <label className={styles.inputWrapper}>
          <Field
            className={styles.inputForm}
            type="number"
            name="diagonal"
            placeholder="Screen Diagonal (inches)"
            step="0.01"
          />
          <ErrorMessage
            className={styles.errorMsgInput}
            name="diagonal"
            component="div"
          />
        </label>

        <label className={`${styles.inputWrapper} ${styles.inputNFC}`}>
          <Field className={styles.inputForm} type="checkbox" name="isNFC" />
          <span>NFC Support</span>
          <ErrorMessage
            className={styles.errorMsgInput}
            name="isNFC"
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

const mapDispatchToProps = dispatch => ({
  createPhone: values => dispatch(createPhoneThunk(values)),
})

export default connect(null, mapDispatchToProps)(PhonesForm)
