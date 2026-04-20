import { Questions } from '@/entities/ui/Questions'
import { SearchInput } from '@/features/search-movies/SearchInput'
import { ToggleTheme } from '@/features/toggle-theme/ToggleTheme'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { MoviesList } from '@/widgets/MoviesList'

function App() {
	return (
		<>
			<Header>
				<div className='flex'>
					<SearchInput />
					<ToggleTheme />
				</div>
			</Header>
			<main className='flex flex-wrap w-full'>
				<div className='flex w-full gap-6 flex-col items-center md:items-start md:flex-row '>
					<MoviesList />
				</div>
				<div className='mx-auto my-[90px] max-w-6xl w-full'>
					<Questions />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
