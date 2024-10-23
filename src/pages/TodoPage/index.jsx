import TodoFilter from '../../components/TodoFilter'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import styles from './TodoPage.module.sass'

function TodoPage() {
  return (
    <div className={styles.todoWrapper}>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  )
}

export default TodoPage
