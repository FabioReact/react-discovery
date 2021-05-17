// Créer un nouveau composant responsable d'afficher une seule tache.
// L'appeler dans App.js
// Fournir les différentes informations pour une tache donnée via les props

const Task = (props) => {
	// Destructuration
	// const { nom, statut, description } = props
	const nom = props.nom
	const statut = props.statut
	const description = props.description

	return (
		<article>
			<h1>{nom}</h1>
			<h2>{statut}</h2>
			<p>{description}</p>
		</article>
	)
}

export { Task }