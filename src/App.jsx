import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChat from './components/ResultChart/ResultChat'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingProsmise = fetch('./public/pricingData.json')
	.then(res => res.json());

const marksPromise = axios.get('marksData.json');

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

				<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
					<MarksChart marksPromise={marksPromise}></MarksChart>
				</Suspense>

				<ResultChat></ResultChat>
			</main>

		</>
	)
}

export default App
