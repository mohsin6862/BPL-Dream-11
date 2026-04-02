import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';
import { ToastContainer } from 'react-toastify';

function App() {
const playersPromise = fetch('/public/data.json')
.then(res=>res.json());

const [coin,setCoin]=useState(500000)

  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
    </Suspense>
    </div>
    <ToastContainer />

    </>
  )
}

export default App
