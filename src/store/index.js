import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoListSlice'

const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
})

export default store
