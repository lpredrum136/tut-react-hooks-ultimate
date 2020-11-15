import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  // Load theme context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme
  const style = isLightTheme ? light : dark

  // Load auth context
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)

  return (
    <div className='navbar' style={style}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? 'You are logged in ' : ''}
          <button onClick={toggleAuth}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
