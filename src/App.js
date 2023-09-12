import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Photos from './components/Photos/Photos';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Engineering from './components/Engineering/Engineering';

function App() {
    return (
        <Router>
            <Navbar />
            <div className='page-wrapper'>
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/photos' element={<Photos />} />
              <Route path='/engineering' element={<Engineering />} />
            </Routes>
            </div>
        </Router>
    );
  }


export default App;