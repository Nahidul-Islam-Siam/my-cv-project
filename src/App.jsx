
import './App.css'
import AnnouncedBar from './components/AnnouncedBar'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (

   <div className='mx-auto '>
    {/* <AnnouncedBar></AnnouncedBar> */}
    <Navbar></Navbar>
    <Hero/>
   </div>
  )
}

export default App
