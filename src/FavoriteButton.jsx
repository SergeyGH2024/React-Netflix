import { memo, useState } from 'react'
import './index.css'

function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)

	return (
		<button
			className='buttonFavorite'
			onClick={() => setIsFavorite(!isFavorite)}
		>
			{isFavorite ? '♥️' : '🤍'}
		</button>
	)
}

export default memo(FavoriteButton)
