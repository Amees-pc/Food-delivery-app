import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'
import { RestaurauntPage } from './RestaurauntPage'
import RestaurauntList from './RestaurauntList'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<RestaurauntPage/>} />
  <Route path='/list' element={<RestaurauntList/>} />
</Routes>
</BrowserRouter>

    
    </>
      



  )
}

export default App
