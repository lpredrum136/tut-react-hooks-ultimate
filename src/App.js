import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Todos from './components/Todos'
import ThemeContextProvider from './contexts/ThemeContext'
import TodoContextProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  )
}

export default App
