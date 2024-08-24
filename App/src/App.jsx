import UserCard from './components/UserCard'

function App() {
  const user = {
    name: 'Ivo',
    email: 'ivo@mail.com',
  }
  return <UserCard user={user} />
}

export default App
