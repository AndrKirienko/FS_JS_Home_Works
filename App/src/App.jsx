import ReactList from './components/ReactList'
import { users } from './components/ReactList/userList'

function App() {
  return (
    <>
      <ReactList users={users} />
    </>
  )
}

export default App
