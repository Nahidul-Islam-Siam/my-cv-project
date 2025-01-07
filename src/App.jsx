
import './App.css'
import AnnouncedBar from './components/AnnouncedBar'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'
import ProductSlider from './components/NewArrival'

function App() {


  return (

   <div className='mx-auto  max-w-full overflow-hidden'>
    {/* <AnnouncedBar></AnnouncedBar> */}
    <Navbar></Navbar>
    <Hero/>
    <LogoSlider/>
    <ProductSlider/>
   </div>
  )
}

export default App
