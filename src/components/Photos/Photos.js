import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';

function handleClick() {
  console.log("photo was clicked")
}

const Photos = () => {
    return (
        <div>
          <h2 className='page-header'>Photos</h2>
          <p className='page-intro'>Here is a collection of my photography work</p>
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