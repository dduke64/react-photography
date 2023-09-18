import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';
import { useMyContext } from '../../utils/context';



function handleClick() {
  console.log("photo was clicked")
}

function Photos() {

  const { data } = useMyContext();

    return (
        <div>
          <h2 className='page-header'>{data?.Photos.title}</h2>
          <p className='page-intro'>{data?.Photos.intro}</p>
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