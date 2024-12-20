import { useState } from 'react'

import './App.css'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Skills</h1>
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
