import React, {useEffect, useState} from 'react';
import '../../App.css'
import {getData} from '../../siteData'


function About() {

  const [labels, setlabels] = useState();
  useEffect(() => {
    getData().then(data => {
      setlabels(data)
      })
  },[]);

    return (
        <div>
          <h2 className='page-header'>{labels?.About.title}</h2>
        </div>
    );
  }


export default About;