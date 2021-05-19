import { useState, lazy, Supense, Suspense } from 'react'
import Loading from "./components/Loading"
import AuthContext from './context/auth-context'
// import Layout from './hoc/Layout'
// import Routes from './Routes'
const Layout = lazy(() => import('./hoc/Layout'))
const Routes = lazy(() => import('./Routes'))

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
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes darkMode={darkMode} setDarkMode={setDarkMode} connected={connected} />
        </Layout>
      </Suspense>
		</AuthContext.Provider>
	)
}

export default App
