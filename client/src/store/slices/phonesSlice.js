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
      await API.removePhone(payload)
      return payload
    } catch (error) {
      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.response.data.errors,
      })
    }
  }
)

export const createPhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/post`,
  async (payload, thunkApi) => {
    try {
      const {
        data: { data },
      } = await API.createPhone(payload)
      return data
    } catch (error) {
      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.response.date.errors,
      })
    }
  }
)

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
    builder.addCase(createPhoneThunk.pending, state => {
      state.error = null
    })

    builder.addCase(createPhoneThunk.rejected, (state, { payload }) => {
      state.error = payload
		})
		
    builder.addCase(createPhoneThunk.fulfilled, (state, { payload }) => {
      state.phones.unshift(payload)
    })

    builder.addCase(removePhoneThunk.pending, state => {
      //state.isFetching = true
      state.error = null
    })

    builder.addCase(removePhoneThunk.rejected, (state, { payload }) => {
      // state.isFetching = false
      state.error = payload
    })

    builder.addCase(removePhoneThunk.fulfilled, (state, { payload }) => {
      // state.isFetching = false
      const removePhoneIndex = state.phones.findIndex(p => p.id === payload)
      if (removePhoneIndex !== -1) {
        state.phones.splice(removePhoneIndex, 1)
      }
    })

    builder.addCase(getPhonesThunk.pending, state => {
      //state.isFetching = true
      state.error = null
    })

    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      //state.isFetching = false
      state.error = payload
    })

    builder.addCase(getPhonesThunk.fulfilled, (state, { payload }) => {
      //state.isFetching = false
      state.phones = [...payload]
    })
  },
})

const { reducer, actions } = phonesSlice

export const { handleNext, handlePrev, handleShowMore } = actions

export default reducer
