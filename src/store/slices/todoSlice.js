import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todo: [
    { id: uuidv4(), title: 'Buy groceries', isDone: true },
    { id: uuidv4(), title: 'Complete project report', isDone: false },
    { id: uuidv4(), title: 'Call mom', isDone: false },
  ],
}

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {},
})

const { reducer } = todoSlice
export default reducer
