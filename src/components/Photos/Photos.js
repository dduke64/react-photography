import React , {useState, useEffect} from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Photos.css';
import { useMyContext } from '../../utils/context';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import images from '../../staticResources/images.json'



// const gradImg = "https://personalwebsitephotos.blob.core.windows.net/photos/grad_selfie.jpg"
// const img1 = "https://personalwebsitephotos.blob.core.windows.net/photos/pic1.jpeg"
// const img2 = "https://personalwebsitephotos.blob.core.windows.net/photos/pic2.webp"
// const img3 = "https://personalwebsitephotos.blob.core.windows.net/photos/pic3.jpeg"


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
            <button className='exit-button' onClick={backdropClicked}>X</button>
            <Swiper navigation={true} modules={[Navigation]} className="swiper-element">
              <SwiperSlide>
                <div className='modal-image'>
                <img alt={modalImage.alt} src={modalImage.src} />
                </div>
              </SwiperSlide>
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