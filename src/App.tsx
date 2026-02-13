import './App.css'
import BtcFloatCard from './components/BtcFloatCard'
import BtcPriceCard from './components/BtcPriceCard'
import FearAndGreedCard from './components/FearAndGreedCard'
import RsiCard from './components/RsiCard'

function App() {
    return (
        <>
            <BtcPriceCard />
            <FearAndGreedCard />
            <RsiCard />
            <BtcFloatCard />
        </>
    )
}

export default App
