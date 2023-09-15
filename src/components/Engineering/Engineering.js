import React from 'react';
import './Engineering.css'
const Engineering = () => {
    return (
        <div>
          <h2 className='page-header'>Engineering</h2>
          <p className='page-intro'>
This page is to describe my work as a software engineer and provide my resume

</p>
<div className='resume-container'>
<iframe src="https://personalwebsitephotos.blob.core.windows.net/data/aug-23-enrich.pdf" type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href="https://personalwebsitephotos.blob.core.windows.net/data/aug-23-enrich.pdf">to the PDF!</a></p>
  </iframe>
  </div>
        </div>
    );
  }


export default Engineering;