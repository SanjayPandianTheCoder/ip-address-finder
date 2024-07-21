import React from 'react'
import Heading from './components/Heading'
import IpFinder from './components/IpFinder'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='root-app'>
      <Heading content="Your IP Address" className='Heading'/>  
      <IpFinder/>
    </div>
  )
}

export default App