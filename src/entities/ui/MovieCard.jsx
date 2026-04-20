import FavoriteButton from '@/shared/ui/FavoriteButton'
import { Modal } from '@/widgets/Modal'
import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ image, rating, trailerYoutubeId }) {
	const [isOpenTrailer, setIsOpenTrailer] = useState(false)

	const openTrailer = useCallback(() => {
		setIsOpenTrailer(true)
	}, [])

	return (
		<div
			className='relative w-[200px] h-[300px] rounded-2xl overflow-hidden
		bg-neutral-900 shadow-lg hover:scale-105 transition-transform
		will-change-transform duration-300
		'
		>
			{isOpenTrailer && (
				<Modal onClose={() => setIsOpenTrailer(false)}>
					<iframe
						width='373'
						height='210'
						src={`https://www.youtube.com/embed/${trailerYoutubeId}?amp;controls=0`}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					/>
				</Modal>
			)}

			<img
				src={image}
				alt='Movie Poster'
				className='w-full h-auto object-cover h-full'
			/>

			<div className='absolute top-0 right-0 z-150 buttonFavoriteWrapper'>
				<Link to={`/movie/${trailerYoutubeId}`} className='buttonLink'>
					🔗
				</Link>
				<button className='buttonTrailer' onClick={openTrailer}>
					<img
						src={`${import.meta.env.BASE_URL}trailer.png`}
						alt='Trailer'
						width={25}
					/>
				</button>
				<FavoriteButton />
			</div>

			<div
				className='absolute bottom-0 left-0 w-full bg-gradient-to-t
			from-black/80 to-transparent p-2 text-sm text-white font-semibold
			'
			>
				IMDb rating: {rating}
			</div>
		</div>
	)
}

export default memo(MovieCard)
