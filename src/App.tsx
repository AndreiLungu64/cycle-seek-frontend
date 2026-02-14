import './App.css'
import BtcDominanceCard from './components/BtcDominanceCard'
import BtcFloatCard from './components/BtcFloatCard'
import BtcPriceCard from './components/BtcPriceCard'
import FearAndGreedCard from './components/FearAndGreedCard'
import LongShortCard from './components/LongShortCard'
import RsiCard from './components/RsiCard'

function App() {
    return (
        <>
            <BtcPriceCard />
            <FearAndGreedCard />
            <RsiCard />
            <BtcFloatCard />
            <LongShortCard />
            <BtcDominanceCard />
        </>
    )
}

export default App
