import { useMemo, useState } from 'react'
import { useDebounce } from './hooks/useDebounce'
import { useTheme } from './hooks/useTheme'
import MovieCard from './MovieCard'
import { MOVIES } from './movies.data'

function App() {
	const { theme, toggleTheme } = useTheme()

	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const movies = useMemo(() => {
		return MOVIES.filter(movie =>
			movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
		)
	}, [debouncedSearch])

	return (
		<div className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
			<header className='mb-10 flex items-center justify-between'>
				<img
					src='../public/netflix.png'
					alt='Netflix'
					className='h-12 w-auto'
				/>

				<div>
					<input
						placeholder='Search...'
						className='border border-black dark:border-white/15 px-2 py-1 rounded outline-0 h-10'
						type='search'
						value={searchTerm}
						onChange={event => {
							setSearchTerm(event.target.value)
						}}
					/>

					<button
						onClick={toggleTheme}
						className='px-3 py-2 rounded border border-black/10 text-white bg-black hover:bg-gray-700/100 dark:border-white/20
					 dark:border-white/10 
					 dark:hover:bg-white/10 transition w-20 h-10
					 '
					>
						{theme === 'dark' ? '🌞 Light' : '🌚 Dark'}
					</button>
				</div>
			</header>
			<main className='flex gap-6'>
				{movies.length ? (
					movies.map(({ name, image, rating, trailerYoutubeId }) => (
						<MovieCard
							key={name}
							image={image}
							rating={rating}
							trailerYoutubeId={trailerYoutubeId}
						/>
					))
				) : (
					<p>Movies not found!</p>
				)}
			</main>
		</div>
	)
}

export default App
