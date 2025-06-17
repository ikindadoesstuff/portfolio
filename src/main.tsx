import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

// Import Pages
import Landing from './Landing.tsx'

// Import Stylesheet
import './global.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing/>}>

				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
