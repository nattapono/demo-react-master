import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter , NavLink, Routes, Route, Na, HashRoutervigate} from 'react-router-dom'

//Pages
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Dashboard from './views/Dashboard'
import Error from './views/Error'

function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  function handleLogIn(){
    setLoggedIn(true)
  }
  function handleLogOut(){
    setLoggedIn(false)
  }
  let activeClassName = "nav-active"
  return (
    <HashRouter>
      <header>
        <h1>Hi</h1>
      </header>
      <nav>
        <NavLink end to="/" className={({isActive})=>isActive ? activeClassName : undefined}>Home</NavLink> 
        <NavLink to="/About"  className={({isActive})=>isActive ? activeClassName : undefined}>About</NavLink> 
        <NavLink to="/Contact"  className={({isActive})=>isActive ? activeClassName : undefined}>Contact</NavLink> 
        <NavLink to="/Dashboard">Dashboard</NavLink> 
      </nav>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/Dashboard"/> : <Home login={handleLogIn} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={loggedIn ? <Dashboard logout={handleLogOut} /> : <Navigate to="/" state={"Text from Dashboard"} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  )
}

export default App
