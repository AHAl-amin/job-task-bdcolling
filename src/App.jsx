

import './App.css'
import Banner from './components/Banner'
import Community from './components/Community'
import Faguestion from './components/Faguestion'
import Footer from './components/Footer'
import Perfect from './components/Perfect'
// import Navber from './components/Navber'
function App() {


  return (
    <>
     
     
      {/* <Navber></Navber> */}
    <div className='bg-base-200'>
    <Banner></Banner>
     <Community></Community>
     <Perfect></Perfect>
     <Faguestion></Faguestion>
     <Footer></Footer>

    </div>
    </>
  )
}

export default App
