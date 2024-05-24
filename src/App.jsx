import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HomeHead from './components/homehead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeHead name="Atul"/>
    </>
  )
}

export default App
