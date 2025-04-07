// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Inscription from './components/pages/inscription'
import NavBar from './components/navBar'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='w-full flex flex-col items-center gap-6 justify-center'>
        <NavBar/>
        <Inscription/>
      </div>
    </BrowserRouter>
  )
}

export default App
