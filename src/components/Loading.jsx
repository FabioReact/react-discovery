import styles from './loading.module.css'

const Loading = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className={styles['dots-loader']}>
				<div className={styles['dots']}></div>
				<div className={styles['dots']}></div>
				<div className={styles['dots']}></div>
				<div className={styles['dots']}></div>
				<div className={styles['dots']}></div>
				<div className={styles['dots']}></div>
			</div>
		</div>
	)
}

export default Loading
