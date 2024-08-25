import { useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import styles from './ReactList.module.sass'

function ReactList({ users }) {
  const [userList, setUserList] = useState(users)

  const handleRemoveUser = userId => {
    setUserList(userList.filter(user => user.id !== userId))
  }

  return (
    <section>
      <ul className={styles.usersWrapper}>
        {userList.map(u => (
          <li key={u.id} className={styles.userWrapperItem}>
            <img src={u.image} alt={u.name} className={styles.userImg} />
            <h2 className={styles.userFullName}>
              <span>{u.name}</span>
              <span>{u.surname}</span>
            </h2>
            <button
              className={styles.trashBtn}
              onClick={() => handleRemoveUser(u.id)}
            >
              <CiTrash />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ReactList
