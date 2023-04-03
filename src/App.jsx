import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/css/App.css'
import './assets/css/tiny-slider.css'
import './assets/css/bootstrap-icons.css'
import { BrowserRouter , NavLink, Routes, Route, Navigate} from 'react-router-dom'

//Pages
import Home from './views/Home'
import About from './views/About'
import Header from './components/template/Header'
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
    <BrowserRouter>
      <Header />
      {/* <nav>
        <NavLink end to="/" className={({isActive})=>isActive ? activeClassName : undefined}>Home</NavLink> 
        <NavLink to="/About"  className={({isActive})=>isActive ? activeClassName : undefined}>About</NavLink> 
        <NavLink to="/Contact"  className={({isActive})=>isActive ? activeClassName : undefined}>Contact</NavLink> 
        <NavLink to="/Dashboard">Dashboard</NavLink> 
      </nav> */}
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/Dashboard"/> : <Home login={handleLogIn} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={loggedIn ? <Dashboard logout={handleLogOut} /> : <Navigate to="/" state={"Text from Dashboard"} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
