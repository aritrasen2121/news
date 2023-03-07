import './App.css'
import { Route, Routes} from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from './context/ContextProvider'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import World from './pages/World'
import Bitcoin  from './pages/Bitcoin'
import Technology from './pages/Technology'
import Sports from './pages/Sports'
import DetailNews from './Components/DetailNews'


const App =() =>{
  const {sidebar, setSidebar} = useContext(StateContext)
 return (
  <>
  <Navbar />
  <div className='mx-3 md:mx-44 pb-16'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/world' element={<World/>} />
      <Route path='/bitcoin' element={<Bitcoin/>} />
      <Route path='/technology' element={<Technology/>} />
      <Route path='/sports' element={<Sports/>} />
      <Route path='/detailnews' element={<DetailNews/>} />
    </Routes>
  </div>
  </>
 )
}

export default App
