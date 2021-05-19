import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
	return (
		<div className='flex'>
			<Navbar />
			<main className="flex-grow">
				{children}
			</main>
		</div>
	)
}

export default Layout