import { Header } from '@/widgets/Header'
import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout() {
	const { pathname } = useLocation()

	const isHomePage = useMemo(() => pathname === '/', [pathname])

	return (
		<div className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
			{!isHomePage && <Header />}
			<Outlet />
		</div>
	)
}
