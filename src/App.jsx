import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'

const pricingProsmise = fetch('./public/pricingData.json')
	.then(res => res.json());

function App() {

	return (
		<>

			<header>
				<NavBar></NavBar>
				{/* <DaisyNav></DaisyNav> */}
			</header>

			<main>
				<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
					<PricingOptions pricingProsmise={pricingProsmise}></PricingOptions>
				</Suspense>

				<ResultChart></ResultChart>
			</main>

		</>
	)
}

export default App
