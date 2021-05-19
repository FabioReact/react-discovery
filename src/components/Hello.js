// Un composant react est une fonction qui retourne du JSX

function Hello() {
	return (
		// Si je ne souhaite retourner qu'un seul noeud, je peux utiliser la balise vide, raccourcie de React.Fragment: https://reactjs.org/docs/fragments.html
		<>
			<h1>Hello World</h1>
			<h2>🚀</h2>
		</>
	)
}
// Export par défaut - Un seul export par défaut est possible
export default Hello
// Export nommé
// export { Hello }
