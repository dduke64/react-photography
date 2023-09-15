import React from 'react';
import '../../App.css'


function About({labels}) {


    return (
        <div>
          <h2 className='page-header'>{labels?.About.title}</h2>
        </div>
    );
  }


export default About;