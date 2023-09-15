import React, {useState, useEffect} from 'react';
import {getData} from '../../siteData'


function Contact (data) {

  const [labels, setlabels] = useState();
  useEffect(() => {
    getData().then(data => {
      setlabels(data)
      })
  },[]);

    return (
        <div>
          <h2 className='page-header'>{labels?.Contact.title}</h2>
          <form>
            <p className='page-intro'>
            {labels?.Contact.intro}
            </p>
          </form>
        </div>
    );
  }


export default Contact;