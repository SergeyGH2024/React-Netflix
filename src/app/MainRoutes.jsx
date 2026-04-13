import App from '@/pages/HomePage/App'
import { MovieDetails } from '@/pages/MovieDetails/MovieDetails'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from './Layout'

export function MainRoutes() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<App />} />
					<Route path='/movie/:id' element={<MovieDetails />} />
				</Route>
			</Routes>
		</Router>
	)
}
