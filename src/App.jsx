import React from 'react'
import "./styles/App.scss"
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
const App = () => {
  return (
    <div className='parent_container'>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
