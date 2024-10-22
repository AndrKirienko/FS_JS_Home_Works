import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaRegCircle } from 'react-icons/fa'
import { MdOutlineModeEdit } from 'react-icons/md'
import TodoFormEdit from '../TodoFormEdit'
import styles from './TodoListItem.module.sass'

function TodoListItem({ todo: { id, title, isDone }, remove, done }) {
  const [isEdit, setEdit] = useState(false)

  const handleOnEdit = () => {
    setEdit(!isEdit)
  }

  const btnClass = `${styles.btnIsDone} ${
    isDone ? styles.isDoneActive : styles.isDoneDisabled
  }`

  return (
    <li className={styles.todoItem}>
      {isEdit ? (
        <TodoFormEdit id={id} title={title} setEdit={setEdit} isEdit />
      ) : (
        <>
          <button
            className={btnClass}
            onClick={() => {
              done(id)
            }}
          >
            {isDone ? <FaRegCheckCircle /> : <FaRegCircle />}
          </button>
          <h3 className={styles.title}>{title}</h3>
          <button onClick={handleOnEdit} className={styles.btnEdit}>
            <MdOutlineModeEdit />
          </button>
          <button
            className={styles.trash}
            onClick={() => {
              remove(id)
            }}
          >
            <FaRegTrashAlt />
          </button>
        </>
      )}
    </li>
  )
}

export default TodoListItem
