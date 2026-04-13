import '@/app/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainRoutes } from './app/MainRoutes.jsx'
import { ThemeProvider } from './app/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<MainRoutes />
		</ThemeProvider>
	</StrictMode>,
)
