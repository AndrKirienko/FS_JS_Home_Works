import { createSlice } from '@reduxjs/toolkit'

const SLICE_NAME = 'user'

const initialStateUser = {
  nickname: 'Testovich',
  isFavorite: false,
}

const userSlice = createSlice({
  initialStateUser,
  name: SLICE_NAME,
  reducers: {
    isFavorite(state) {
      const { isFavorite } = state
      state.isFavorite = !isFavorite
    },
  },
})

console.log(userSlice)

const { reducer } = userSlice

export default reducer
