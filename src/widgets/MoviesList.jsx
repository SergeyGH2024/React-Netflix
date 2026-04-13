import { ThemeContext } from '@/app/ThemeProvider'
import MovieCard from '@/entities/ui/MovieCard'
import { useContext } from 'react'

export function MoviesList() {
	const { movies } = useContext(ThemeContext)

	return (
		<>
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
				<p className='text-2xl'>Movies not found!</p>
			)}
		</>
	)
}
