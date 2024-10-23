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
  filterTodo: [
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

      const fountFilterTodoIndex = state.filterTodo.findIndex(
        t => t.id === payload,
      )

      if (fountFilterTodoIndex !== 1) {
        state.filterTodo.splice(fountFilterTodoIndex, 1)
      }
    },
    doneTodo: (state, { payload }) => {
      const foundTodoIndex = state.todo.findIndex(t => t.id === payload)
      if (foundTodoIndex !== -1) {
        state.todo[foundTodoIndex].isDone = !state.todo[foundTodoIndex].isDone
      }

      const foundFilterTodoIndex = state.filterTodo.findIndex(
        t => t.id === payload,
      )
      if (foundFilterTodoIndex !== -1) {
        state.filterTodo[foundFilterTodoIndex].isDone =
          !state.filterTodo[foundFilterTodoIndex].isDone
      }
    },
    createTodo: (state, { payload }) => {
      const newTodo = {
        ...payload,
        id: uuidv4(),
        isDone: false,
      }
      state.todo.unshift(newTodo)
      state.filterTodo.unshift(newTodo)
    },
    editTodo: (state, { payload: { id, title } }) => {
      const foundTodoIndex = state.todo.findIndex(t => t.id === id)

      if (foundTodoIndex !== -1) {
        state.todo[foundTodoIndex].title = title
      }

      const foundFilterTodoIndex = state.filterTodo.findIndex(t => t.id === id)

      if (foundFilterTodoIndex !== -1) {
        state.filterTodo[foundFilterTodoIndex].title = title
      }
    },
    filterTodo: (state, { payload: { filter } }) => {
      switch (filter) {
        case 'done':
          state.todo = state.filterTodo.filter(t => t.isDone === true)
          break
        case 'notDone':
          state.todo = state.filterTodo.filter(t => t.isDone === false)
          break
        default:
          state.todo = state.filterTodo.filter(
            t => t.isDone === false || t.isDone === true,
          )
      }
    },
  },
})

const { reducer, actions } = todoSlice

export const { removeTodo, doneTodo, createTodo, editTodo, filterTodo } =
  actions
export default reducer
