
import './App.css'
import AnnouncedBar from './components/AnnouncedBar'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'

function App() {


  return (

   <div className='mx-auto  max-w-full overflow-hidden'>
    {/* <AnnouncedBar></AnnouncedBar> */}
    <Navbar></Navbar>
    <Hero/>
    <LogoSlider/>
   </div>
  )
}

export default App
