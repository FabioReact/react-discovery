

const Logout = () => {

	return (
		<div className='h-screen font-sans login bg-cover' style={{
			background: "url('http://bit.ly/2gPLxZ4')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		}}>
			<div className='container mx-auto h-full flex flex-1 justify-center items-center'>
				<div className='w-full max-w-lg'>
					<div className='leading-loose'>
						<form onSubmit={() => {}} className='max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
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
