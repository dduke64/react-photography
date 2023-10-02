import React , {useState, useEffect} from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';
import { useMyContext } from 'utils/context';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import images from 'staticResources/images.json'


function Photos() {
  const { data } = useMyContext();
  const [toggleModal, setToggleModal] = useState(false)
  const [modalImage, setModalImage] = useState()
  var imageArr = [];



  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        setToggleModal(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);


  function modal() {
    if(toggleModal) {
      return (
        <div className='modal'>
          <div onClick={backdropClicked} className='modal-backdrop'> </div>
          <div className="swiper-container">
          <button className='exit-button'><img src={require("staticResources/close.png")} alt="close button" onClick={handleClick} /></button>
              <Swiper initialSlide={imageArr.indexOf(modalImage)}
                autoHeight={true}
                navigation={true} 
                modules={[Navigation, Keyboard]} 
                className="swiper-element">
              {imageArr.map((image, index) => (
              <SwiperSlide>
                <div className='modal-image'>
                <img alt={image.alt} src={image.src} />
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div> 
            )
    } return
  }


  function handleClick(image) {
    setModalImage(image)
    toggleModal ? setToggleModal(false) : setToggleModal(true)
  }

  function backdropClicked() {
    setToggleModal(false)
  }

  Object.keys(images).forEach(function(key) {
    imageArr.push(images[key]);
  });

    return (
        <div >
          {modal()}
          <h2 className='page-header'>{data?.Photos.title}</h2>
          <p className='page-intro'>{data?.Photos.intro}</p>
          <div className='photos'>
            {imageArr.map((image, index) => (
              <div className='photo-container' key={index} onClick={() => handleClick(image)}>
                <PhotoContainer
                  imgSrc={image.src}
                />
              </div>

            ))}
            {/* <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={gradImg} />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={img1} />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={img2} />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={img3} />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={gradImg} />
            </div>
            <div className='photo-container' onClick={handleClick}>
            <PhotoContainer imgSrc={gradImg} />
            </div> */}
          </div>
        </div>
    );
  }


export default Photos;