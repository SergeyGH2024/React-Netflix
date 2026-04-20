import { Link } from 'react-router-dom'

export function Header({ children }) {
	return (
		<header className='mb-10 flex flex-col md:flex-row gap-6 items-center justify-between'>
			<Link to='/'>
				<img
					src={`${import.meta.env.BASE_URL}netflix.png`}
					alt='Netflix'
					className='h-12 w-auto'
				/>
			</Link>
			{children}
		</header>
	)
}
