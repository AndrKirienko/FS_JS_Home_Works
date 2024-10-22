import TodoFormik from './TodoFormik'
import styles from './TodoForm.module.sass'

function TodoForm() {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.titleForm}>New Todo:</h2>
      <TodoFormik styles={styles} />
    </section>
  )
}

export default TodoForm
