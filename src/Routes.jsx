import { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import Login from './pages/Login'
// import Page404 from './pages/Page404'
// import TaskList from './pages/TaskList'
// import Preferences from './pages/Preferences'
// import Logout from './pages/Logout'
// import Inbox from './pages/Inbox'
const Login = lazy(() => import('./pages/Login'))
const Logout = lazy(() => import('./pages/Logout'))
const Page404 = lazy(() => import('./pages/Page404'))
const TaskList = lazy(() => import('./pages/TaskList'))
const Preferences = lazy(() => import('./pages/Preferences'))
const Inbox = lazy(() => import('./pages/Inbox'))

const Routes = ({ darkMode, setDarkMode, connected }) => {
	return (
		<Switch>
			<Route path='/settings'>
				<Preferences darkMode={darkMode} setDarkMode={setDarkMode} />
			</Route>
			<Route path='/login' component={Login} />
			<Route path='/logout' component={Logout} />
			<Route path='/inbox'>
				{connected ? <Inbox /> : <Redirect to='/login' />}
			</Route>
			<Route path='/tasks'>
				<TaskList darkMode={darkMode} />
			</Route>
			<Route path='/' exact>
				<h1>Je suis sur la page d'accueil</h1>
			</Route>
			<Route path='*' component={Page404} />
		</Switch>
	)
}

export default Routes
