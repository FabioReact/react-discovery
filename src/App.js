// import Hello from './Hello' // Import par défaut
// import { Hello } from './Hello' // Import nommé
// import Button from './Button'
import { Task } from './Task'
// import Lifecycle from './Lifecycle'
import Login from './Login'
// import { useState } from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import Page404 from "./Page404";

function App() {
	// Méthode pure
	// 1. Elle ne change pas son contexte/le monde extérieur (sans effet de bord / side effect)
	// 2. Pour un même input (entrée) elle a toujours le même output (sortie)

	return (
		<div className='flex'>
			<Navbar />
			<main className="flex-grow">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/task">
            <Task nom="Apprendre react" statut="En cours" description="Lorem ipsum" />
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
	)
}

export default App
