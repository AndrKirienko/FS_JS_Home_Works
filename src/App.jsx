import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/component">Component</Link>
      <Link to="/about">About</Link>

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
