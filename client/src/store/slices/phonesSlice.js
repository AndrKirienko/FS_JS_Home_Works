import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as API from './../../api'
import CONSTANTS from '../../../constants'
const {
  PHONES_SLICE_NAME,
  PAGINATION: { INITIAL_PAGE, INITIAL_RESULTS },
} = CONSTANTS

const initialState = {
  phones: [],
  page: INITIAL_PAGE,
  results: INITIAL_RESULTS,
}

export const getPhonesThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get`,
  async ({ page, results }, thunkApi) => {
    try {
      const {
        data: { data },
      } = await API.getPhones(page, results)
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
  reducers: {
    handleNext: state => {
      if (state.phones.length > 0) {
        state.page = state.page + 1
      }
    },
    handlePrev: state => {
      if (state.page > 1) {
        state.page = state.page - 1
      }
    },
    handleShowMore: state => {
      state.results = state.results + INITIAL_RESULTS
    },
  },
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
      state.phones = [...payload]
    })
  },
})

const { reducer, actions } = phonesSlice

export const { handleNext, handlePrev, handleShowMore } = actions

export default reducer
