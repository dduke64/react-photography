import React from 'react';
import './Engineering.css'


function Engineering({labels}) {

    return (
      <div>
        <h2 className='page-header'>{labels?.Engineering?.title}</h2>
        <p className='page-intro'>{labels?.Engineering?.intro}</p>
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