import { createSlice } from '@reduxjs/toolkit'

const initialState = { contacts: [{ id: 1, fullName: 'Test' }] }

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {},
})

const { reducer } = todoSlice
export default reducer
