import { useState } from 'react'
import classNames from 'classnames'
import styles from './SingUp.module.sass'
import { SING_UP_FORM_REG_EXP } from './RegularExp'

function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = ({ target: { value } }) => {
    setName(value)
  }

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPassword('')
  }

  function inputClassName(name, value) {
    const isValueValid = SING_UP_FORM_REG_EXP[name].test(value)
    return classNames(styles.formInput, {
      [styles.validInput]: isValueValid,
      [styles.invalidInput]: !isValueValid,
    })
  }

  return (
    <section className={styles.singUpWrapper}>
      <form className={styles.formWrapper} onSubmit={handleFormSubmit}>
        <h2 className={styles.nameForm}>Sing Up form</h2>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Full name</span>
          <input
            type="text"
            name="name"
            className={inputClassName('name', name)}
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
            className={inputClassName('email', email)}
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
            className={inputClassName('password', password)}
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
