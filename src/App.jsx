import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';

function App() {
const playersPromise = fetch('/public/data.json')
.then(res=>res.json());

  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Players playersPromise={playersPromise}></Players>
    </Suspense>
    </div>
    </>
  )
}

export default App
