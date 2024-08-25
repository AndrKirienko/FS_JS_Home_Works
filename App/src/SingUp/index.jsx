import { useState } from 'react'
import styles from './SingUp.module.sass'
function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section className={styles.singUpWrapper}>
      <form className={styles.formWrapper}>
        <h2 className={styles.nameForm}>Sing Up form</h2>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Full name</span>
          <input type="text" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Email address</span>
          <input type="email" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Password</span>
          <input type="password" className={styles.formInput} />
        </label>
        <button type="submit" className={styles.singUpBtn}>Sing Up</button>
      </form>
    </section>
  )
}

export default SingUp
