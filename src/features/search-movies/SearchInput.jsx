import { ThemeContext } from '@/app/ThemeProvider'
import { useContext } from 'react'

export function SearchInput() {
	const { searchTerm, setSearchTerm } = useContext(ThemeContext)

	return (
		<input
			placeholder='Search...'
			className='border border-black dark:border-white/15 px-2 py-1 rounded outline-0 h-10'
			type='search'
			value={searchTerm}
			onChange={event => {
				setSearchTerm(event.target.value)
			}}
		/>
	)
}
