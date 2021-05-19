import { useContext } from 'react'
import AuthContext from '../context/auth-context'

const Logout = () => {
	// Etape 4 - Je consomme le context grâce à useContext - les variables sont maintenant disponibles dans mon objet authContext
	const authContext = useContext(AuthContext)
	console.log(authContext)

	return (
		<div className='h-screen font-sans login bg-cover' style={{
			background: "url('http://bit.ly/2gPLxZ4')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
			<div className='container mx-auto h-full flex flex-1 justify-center items-center'>
				<div className='w-full max-w-lg'>
					<div className='leading-loose'>
						<form onSubmit={authContext.logout} className='max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
							<p className='text-white font-medium text-center text-xl uppercase tracking-widest'>
								Logout
							</p>
							<div className='mt-4 justify-center flex'>
								<button
									className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'
									type='submit'
								>
									Se Déconnecter
								</button>

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Logout
