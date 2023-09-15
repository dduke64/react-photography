import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Photos from './components/Photos/Photos';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Engineering from './components/Engineering/Engineering';
import {getData} from './siteData'

function App() {

  const [labels, setlabels] = useState();
  useEffect(() => {
    getData().then(data => {
      setlabels(data)
      })
  },[]);

    return (
        <Router>
            <Navbar />
            <div className='page-wrapper'>
            <Routes>
              <Route path='/' element={ <Home labels={labels}/>} />
              <Route path='/contact' element={<Contact labels={labels}/>} />
              <Route path='/about' element={<About labels={labels} />} />
              <Route path='/photos' element={<Photos labels={labels} />} />
              <Route path='/engineering' element={<Engineering labels={labels} />} />
            </Routes>
            </div>
        </Router>
    );
}
export default App;
