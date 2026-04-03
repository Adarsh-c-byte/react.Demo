import React from 'react'
import card from './component/card'
import Navbar from './component/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar />
    {card()}
    </div>
  )
}

export default App
