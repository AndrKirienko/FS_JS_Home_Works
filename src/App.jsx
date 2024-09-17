import {
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

const styleActiveLink = ({ isActive }) => ({
  color: isActive ? 'red' : 'inherit',
})
function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" style={styleActiveLink}>
          Home
        </NavLink>
        <NavLink to="/component" style={styleActiveLink}>
          Component
        </NavLink>
        <NavLink to="/about" style={styleActiveLink}>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<Component />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App

function Home() {
  return <div>Home</div>
}

function Component() {
  return <div>Component</div>
}

function About() {
  return <div>About</div>
}

function NotFound() {
  return (
    <div>
      404 this page is not found
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
