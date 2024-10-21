import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'

const initialStateUser = {
  nickname: 'Testovich',
  isFavorite: false,
}
function reducer(state = initialStateUser, action) {
  const { type } = action
  const { isFavorite } = state

  console.log(isFavorite)
  switch (type) {
    case 'isFavorite':
      return { ...state, isFavorite: !isFavorite }
    default:
      return state
  }
}

const store = legacy_createStore(reducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
