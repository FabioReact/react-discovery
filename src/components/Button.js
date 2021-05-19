import styles from "./button.module.css"

const Button = (props) => {
	return (
		<button className={styles.button + " border rounded px-3"}>{props.text} - {props.nombre}</button>
	)
}

export default Button