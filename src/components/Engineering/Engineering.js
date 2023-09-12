import React from 'react';
const Engineering = () => {
    return (
        <div>
          <h2 className='page-header'>Engineering</h2>
          <p className='page-intro'>
This page is to describe my work as a software engineer and provide my resume

Maybe embed my resume here as a pdf inside a viewer?
</p>
<object data="../../staticResources/aug-23-enrich.pdf" type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
        </div>
    );
  }


export default Engineering;