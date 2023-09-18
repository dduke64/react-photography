import React from 'react';
import './Engineering.css'
import { useMyContext } from '../../utils/context';



function Engineering() {


  const { data } = useMyContext();

    return (
      <div>
        <h2 className='page-header'>{data?.Engineering?.title}</h2>
        <p className='page-intro'>{data?.Engineering?.intro}</p>
        <div className='resume-container'>
          <iframe 
            title="My Software Engineering Resume" 
            src="https://personalwebsitephotos.blob.core.windows.net/data/aug-23-enrich.pdf" 
            type="application/pdf" 
            width="100%" 
            height="100%">
            <p>Alternative text - include a link <a href="https://personalwebsitephotos.blob.core.windows.net/data/aug-23-enrich.pdf">to the PDF!</a></p>
          </iframe>
        </div>
      </div>
    );
  }


export default Engineering;