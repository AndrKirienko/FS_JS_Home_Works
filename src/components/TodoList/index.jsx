import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

function TodoList({ todo }) {
  const mapTodo = t => <TodoListItem key={t.id} todo={t} />

  return (
    <section>
      <h2>Todo List</h2>
      <ul>{todo.map(mapTodo)}</ul>
    </section>
  )
}

const mapStateToProps = ({ todoList }) => todoList

export default connect(mapStateToProps)(TodoList)
