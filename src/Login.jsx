import { useState, useEffect } from 'react'

const Login = ({ setConnected }) => {
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')

	useEffect(() => {
		console.log({ email })
		if (email.length >= 8) {
			setEmailError("")
		}
	}, [email])

	useEffect(() => {
		console.log({ password })
		if (password.length >= 6) {
			setPasswordError("")
		}
	}, [password])

	const onSubmitHandler = event => {
		event.preventDefault()
		if (email.length < 8) {
			setEmailError('Votre email doit contenir au moins 8 caractères')
		}
		if (password.length < 6) {
			setPasswordError('Votre mot de passe doit contenir au moins 6 caractères')
		}
		if (email === "example@email.com" && password === "example") {
			// Izoké, on se connecte
			setConnected(true)
		} else {
			// Mauvais email ou mdp
		}
	}

	return (
		<div className='h-screen font-sans login bg-cover' style={{
			background: "url('http://bit.ly/2gPLxZ4')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
			<div className='container mx-auto h-full flex flex-1 justify-center items-center'>
				<div className='w-full max-w-lg'>
					<div className='leading-loose'>
						<form onSubmit={onSubmitHandler} className='max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
							<p className='text-white font-medium text-center text-xl uppercase tracking-widest'>
								Login
							</p>
							<div>
								<label className='block text-sm text-white' htmlFor='email'>
									E-mail
								</label>
								<input
									className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
									type='email'
									id='email'
									placeholder='Email'
									aria-label='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
								{/* Rendu Conditionnel: https://reactjs.org/docs/conditional-rendering.html */}
								{emailError && <p className='text-red-400 text-sm font-bold'>{emailError}</p>}
							</div>
							<div className='mt-2'>
								<label className='block text-sm text-white' htmlFor='password'>Mot de passe</label>
								<input
									className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
									type='password'
									id='password'
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder='Mot de passe'
									arial-label='mot de passe'
									required
								/>
								{passwordError && <p className='text-red-400 text-sm font-bold'>{passwordError}</p>}
							</div>

							<div className='mt-4 items-center flex justify-between'>
								<button
									className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'
									type='submit'
								>
									Entrer
								</button>
								<a
									className='inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400'
									href='#ok'
								>
									Mot de passe oublié ?
								</a>
							</div>
							<div className='text-center'>
								<a href="#ok" className='inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400 text-white'>
									Créer un compte
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
