import React from 'react';
import '../../App.css'
import './PhotoContainer.css'
const PhotoContainer = ({imgSrc}) => {
    return (
        <div className='photo'>
          <img className='image' alt="me in gown" src={imgSrc} />
        </div>
    );
  }


export default PhotoContainer;