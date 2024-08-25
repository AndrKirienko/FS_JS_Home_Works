import { useState } from 'react'
import styles from './SingUp.module.sass'
function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  return (
    <section className={styles.singUpWrapper}>
      <form className={styles.formWrapper}>
        <h2 className={styles.nameForm}>Sing Up form</h2>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Full name</span>
          <input
            type="text"
            name="name"
            className={styles.formInput}
            value={name}
            onChange={handleNameChange}
            placeholder="John Doe"
            required
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Email address</span>
          <input
            type="email"
            name="email"
            className={styles.formInput}
            value={email}
            onChange={handleEmailChange}
            placeholder="johndor@gmail.com"
            required
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Password</span>
          <input
            type="password"
            name="password"
            className={styles.formInput}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </label>
        <button type="submit" className={styles.singUpBtn}>
          Sing Up
        </button>
      </form>
    </section>
  )
}

export default SingUp
