import { connect } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import { setIsFavorite } from '../../store/slices/userSlice'

function User({ nickname, isFavorite, dispatch, handleIsFavorite }) {
  return (
    <>
      <h2>{nickname}</h2>
      <button
        onClick={handleIsFavorite}
        style={{ color: isFavorite ? 'red' : '' }}
      >
        <FaHeart />
      </button>
    </>
  )
}

function mapStateToProps(state) {
  return state.user
}

function mapDispatchToProps(dispatch) {
  return {
    handleIsFavorite: () => {
      dispatch(setIsFavorite())
    },
  }
}

const withAccessToStore = connect(mapStateToProps, mapDispatchToProps)

export default withAccessToStore(User)
