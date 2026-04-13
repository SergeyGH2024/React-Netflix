import { ThemeContext } from '@/app/ThemeProvider'
import { useContext } from 'react'

export function ToggleTheme() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<button
			onClick={toggleTheme}
			className='px-3 py-2 rounded border border-black/10 text-white bg-black hover:bg-gray-700/100 dark:border-white/20
					 dark:border-white/10 
					 dark:hover:bg-white/10 transition w-20 h-10
					 '
		>
			{theme === 'dark' ? '🌞 Light' : '🌚 Dark'}
		</button>
	)
}
