import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import { doneTodo, removeTodo } from '../../store/slices/todoSlice'

function TodoList({ todo, remove, done }) {
  const mapTodo = t => (
    <TodoListItem key={t.id} todo={t} remove={remove} done={done} />
  )

  return (
    <section>
      <h2>Todo List</h2>
      <ul>{todo.map(mapTodo)}</ul>
    </section>
  )
}

const mapStateToProps = ({ todoList }) => todoList

const mapDispatchToProps = dispatch => ({
  remove: payload => {
    dispatch(removeTodo(payload))
  },
  done: payload => {
    dispatch(doneTodo(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
