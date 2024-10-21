import { connect } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

function User({ nickname, isFavorite, dispatch }) {
  const handleIsFavorite = () => {
    const action = { type: 'isFavorite' }
    dispatch(action)
  }

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
  return state
}

const withAccessToStore = connect(mapStateToProps)

export default withAccessToStore(User)
