import { createSlice } from '@reduxjs/toolkit'
import CONSTANTS from './../../constants'

const SLICE_NAME = CONSTANTS.SLICE_NAME

const initialStateUser = {
  nickname: 'Testovich',
  isFavorite: false,
}

const userSlice = createSlice({
  initialState: initialStateUser,
  name: SLICE_NAME,
  reducers: {
    setIsFavorite(state) {
      const { isFavorite } = state
      state.isFavorite = !isFavorite
    },
  },
})

const { reducer, actions } = userSlice

export const { setIsFavorite } = actions

export default reducer
