import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';


function handleClick() {
  console.log("photo was clicked")
}

function Photos({labels}) {


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