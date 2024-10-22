import styles from './TodoListItem.module.sass'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaRegCircle } from 'react-icons/fa'

function TodoListItem({ todo: { id, title, isDone }, remove, done }) {
  const btnClass = `${styles.btnIsDone} ${
    isDone ? styles.isDoneActive : styles.isDoneDisabled
  }`

  return (
    <li className={styles.todoItem}>
      <button
        className={btnClass}
        onClick={() => {
          done(id)
        }}
      >
        {isDone ? <FaRegCheckCircle /> : <FaRegCircle />}
      </button>
      <h3>{title}</h3>
      <button
        className={styles.trash}
        onClick={() => {
          remove(id)
        }}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default TodoListItem
