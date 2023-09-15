import React, {useState, useEffect} from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';
import {getData} from '../../siteData'


function handleClick() {
  console.log("photo was clicked")
}

function Photos() {

  const [labels, setlabels] = useState();
  useEffect(() => {
    getData().then(data => {
      setlabels(data)
      })
  },[]);

  
    return (
        <div>
          <h2 className='page-header'>{labels?.Photos.title}</h2>
          <p className='page-intro'>{labels?.Photos.intro}</p>
          <div className='photos'>
          <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer />
            </div>
          </div>
        </div>
    );
  }


export default Photos;