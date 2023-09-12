import React from 'react';
import '../../App.css'
import './PhotoContainer.css'
const PhotoContainer = () => {
    return (
        <div className='photo'>
          <img alt="me in gown" src={require("../../staticResources/grad_selfie.jpg")} />
        </div>
    );
  }


export default PhotoContainer;