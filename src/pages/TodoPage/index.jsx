import React from 'react'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

function TodoPage() {
  return (
    <>
      <section>
        <h2>My Todo</h2>
        <TodoForm />
        <TodoList />
      </section>
    </>
  )
}

export default TodoPage
