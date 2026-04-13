import { MOVIES } from '@/entities/model/movies.data'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { createContext, useEffect, useMemo, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('theme') || 'dark',
	)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () =>
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const movies = useMemo(() => {
		return MOVIES.filter(movie =>
			movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
		)
	}, [debouncedSearch])

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
				searchTerm,
				setSearchTerm,
				debouncedSearch,
				movies,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
