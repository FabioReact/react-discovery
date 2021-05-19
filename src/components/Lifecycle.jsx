import { useEffect, useState } from 'react'

const Lifecycle = () => {
	const [messages, setMessages] = useState([])

	// useEffect avec, comme second paramètre un tableau de dépendance vide, ne va s'éxécuté qu'après le render initial (phase de montage)
	useEffect(() => {
		// debugger
		console.log("Je serai visible APRÈS la phase de render")
		const newMessage = "2. La naissance du composant a eu lieu"
		setMessages(prevMessages => [...prevMessages, newMessage])
		return () => {
			console.log("Je serai visible/éxécuté juste avant la destruction du composant")
			
		}
	}, [])

	// Si on souhaite éxécuté du code après chaque mise à jour de notre variable "messages", alors il faudra mettre cette variable dans le tableau de dépendances de useEffect

	useEffect(() => {
		console.log("Ma variables messages à été mise à jour!")
	}, [messages])


	console.log("Je suis visible à pendant la phase de render")

	// debugger
	return (
		<section>
			<ol>
				<li>1. Naissance du composant</li>
				{messages.map((message, index) => <li key={index}>{message}</li>)}
			</ol>
		</section>
	)

}

export default Lifecycle