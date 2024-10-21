import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store

// function reducer(state = initialStateUser, action) {
//   const { type } = action
//   const { isFavorite } = state

//   console.log(isFavorite)
//   switch (type) {
//     case 'isFavorite':
//       return { ...state, isFavorite: !isFavorite }
//     default:
//       return state
//   }
// }

// const store = legacy_createStore(reducer)
