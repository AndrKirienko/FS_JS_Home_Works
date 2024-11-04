import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as API from './../../api'
import CONSTANTS from '../../../constants'
const PHONES_SLICE_NAME = CONSTANTS

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
}

export const getPhonesThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get`,
  async (payload, thunkApi) => {
    try {
      const {
        data: { data },
      } = await API.getPhones()
      return data
    } catch (error) {
      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.response.data.errors,
      })
    }
  }
)

export const removePhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/delete`,
  async (payload, thunkApi) => {
    try {
      const {
        data: { data },
      } = API.removePhone(payload)
      return payload
    } catch (error) {
      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.response.data.errors,
      })
    }
  }
)

// export const createUserThunk = createAsyncThunk(
//   `${USERS_SLICE_NAME}/post`,
//   async (payload, thunkApi) => {
//     try {
//       const {
//         data: { data },
//       } = await API.createUser(payload)
//       return data
//     } catch (error) {
//       return thunkApi.rejectWithValue({
//         status: error.response.status,
//         message: error.response.data.errors,
//       })
//     }
//   },
// )

const phonesSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    //   //createUser
    //   builder.addCase(createUserThunk.pending, (state, action) => {
    //     state.isFetching = true
    //     state.error = null
    //   })

    //   builder.addCase(createUserThunk.rejected, (state, { payload }) => {
    //     state.isFetching = false
    //     state.users.push(payload)
    //   })

    //   builder.addCase(createUserThunk.fulfilled, (state, { payload }) => {
    //     state.isFetching = false
    //     state.users = payload
    //   })

    //   //removeUser
    //   builder.addCase(removeUserThunk.pending, (state, action) => {
    //     state.isFetching = true
    //     state.error = null
    //   })

    //   builder.addCase(removeUserThunk.rejected, (state, { payload }) => {
    //     state.isFetching = false
    //     const deletedUserIndex = state.users.findIndex(u => u.id === payload)
    //     if (deletedUserIndex !== -1) {
    //       state.users.splice(deletedUserIndex, 1)
    //     }
    //   })

    //   builder.addCase(removeUserThunk.fulfilled, (state, { payload }) => {
    //     state.isFetching = false
    //     state.users = payload
    //   })

    builder.addCase(removePhoneThunk.pending, (state, action) => {
      state.isFetching = true
      state.error = null
    })

    builder.addCase(removePhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false
      state.error = payload
    })

    builder.addCase(removePhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false
      const removePhoneIndex = state.phones.findIndex(p => p.id === payload)
      if (removePhoneIndex !== -1) {
        state.phones.splice(removePhoneIndex, 1)
      }
    })

    builder.addCase(getPhonesThunk.pending, (state, action) => {
      state.isFetching = true
      state.error = null
    })

    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      state.isFetching = false
      state.error = payload
    })

    builder.addCase(getPhonesThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false
      state.users = [...payload]
    })
  },
})

const { reducer } = phonesSlice

export default reducer
