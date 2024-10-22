import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todo: [
    { id: uuidv4(), title: 'Buy groceries', isDone: true },
    {
      id: uuidv4(),
      title: 'Complete project report',
      isDone: false,
    },
    { id: uuidv4(), title: 'Call mom', isDone: true },
  ],
}

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    removeTodo: (state, { payload }) => {
      const foundTodoIndex = state.todo.findIndex(t => t.id === payload)

      if (foundTodoIndex !== -1) {
        state.todo.splice(foundTodoIndex, 1)
      }
    },
    doneTodo: (state, { payload }) => {
      const foundTodoIndex = state.todo.findIndex(t => t.id === payload)
      if (foundTodoIndex !== -1) {
        state.todo[foundTodoIndex].isDone = !state.todo[foundTodoIndex].isDone
      }
    },
    createTodo: (state, { payload }) => {
      state.todo.unshift({
        ...payload,
        id: uuidv4(),
        idDone: false,
      })
    },
    editTodo: (state, { payload: { id, title } }) => {
      const foundTodoIndex = state.todo.findIndex(t => t.id === id)

      if (foundTodoIndex !== -1) {
        state.todo[foundTodoIndex].title = title
      }
    },
  },
})

const { reducer, actions } = todoSlice

export const { removeTodo, doneTodo, createTodo, editTodo } = actions
export default reducer
