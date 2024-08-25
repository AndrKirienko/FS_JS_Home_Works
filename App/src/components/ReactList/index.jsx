import React from 'react'
import styles from './ReactList.module.sass'

function ReactList({ users }) {
  return (
    <section>
      <ul className={styles.usersWrapper}>
        {users.map(u => (
          <li key={u.id} className={styles.userWrapperItem}>
            <img src={u.image} alt={u.name} className={styles.userImg} />
            <h2 className={styles.userFullName}>
              <span>{u.name}</span>
              <span>{u.surname}</span>
            </h2>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ReactList
