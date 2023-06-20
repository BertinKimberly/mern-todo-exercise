import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Todos from './pages/Todos'

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path='/todo' element={<Todos/>}/>
       </Routes>
    </Router>
  )
}

export default App
