import styles from './preferences.module.css'

const Preferences = ({ darkMode, setDarkMode }) => {
	return (
		<section className={darkMode ? `${styles.dark} ${styles.preferences}` : styles.preferences}>
			<h1>Preferences</h1>
			<button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
		</section>
	)
}

export default Preferences