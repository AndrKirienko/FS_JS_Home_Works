import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import { doneTodo, removeTodo, editTodo } from '../../store/slices/todoSlice'

function TodoList({ todo, remove, done }) {
  const mapTodo = t => (
    <TodoListItem key={t.id} todo={t} remove={remove} done={done} />
  )

  return (
    <section>
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
  edit: values => {
    dispatch(editTodo(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
