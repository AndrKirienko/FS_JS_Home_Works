import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'

const store = configureStore({
  reducer: {
    todoApp: todoReducer,
  },
})

export default store
