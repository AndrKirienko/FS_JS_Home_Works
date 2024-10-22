import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import styles from './TodoPage.module.sass'

function TodoPage() {
  return (
    <div className={styles.todoWrapper}>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoPage
