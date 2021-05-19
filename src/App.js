import Login from './Login'
import { useState } from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import Page404 from "./Page404"
import TaskList from "./TaskList"
import Preferences from './pages/Preferences'
import Logout from './pages/Logout'
import Inbox from './pages/Inbox'
import AuthContext from './context/auth-context'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [connected, setConnected] = useState(false)

  // Etape 2 - Initialisation de mon context
  const contextValues = {
    connected: connected,
    login: () => setConnected(true),
    logout: () => setConnected(false),
  }

	// Méthode pure
	// 1. Elle ne change pas son contexte/le monde extérieur (sans effet de bord / side effect)
	// 2. Pour un même input (entrée) elle a toujours le même output (sortie)

	return (
    // Etape 3 - Je rend mon context disponible pour les enfants de AuthContext.Provider
    <AuthContext.Provider value={contextValues}>
      <div className='flex'>
        <Navbar />
        <main className="flex-grow">
          <Switch>
            {/* <Route path="/settings" component={Preferences} /> */}
            <Route path="/settings">
              <Preferences darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            <Route path="/login">
              <Login setConnected={setConnected} />
            </Route>
            <Route path="/inbox">
              <Inbox />
            </Route>
            <Route path="/logout" component={Logout} />
            <Route path="/tasks">
              <TaskList darkMode={darkMode} />
            </Route>
            <Route path="/" exact>
              <h1>Je suis sur la page d'accueil</h1>
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </AuthContext.Provider>
	)
}

export default App
