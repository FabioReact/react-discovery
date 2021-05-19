import AuthContext from '../context/auth-context'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

const Inbox = () => {
	// Solution 1 et 2
	const authContext = useContext(AuthContext)

	// Solution 2
	const history = useHistory()
	if (!authContext.connected) {
		history.replace('/login')
	}
	return (
		<div>
			{/* Solution 1 */}
			{/* {authContext.connected ? <h1>Super Secret message</h1> : <p>Va voir les caribous!</p> } */}
			<h1>Super Secret message</h1>
		</div>
	)
}

export default Inbox
