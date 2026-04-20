import { Header } from '@/widgets/Header'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout() {
	const { pathname } = useLocation()

	const base = import.meta.env.BASE_URL
	const isHomePage = pathname === base || pathname === base.slice(0, 1)

	return (
		<div className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
			{!isHomePage && <Header />}
			<Outlet />
		</div>
	)
}
