import React from 'react';
import '../../App.css'
import { useMyContext } from '../../utils/context';



function About() {
  const { data } = useMyContext();


    return (
        <div>
          <h2 className='page-header'>{data?.About.title}</h2>
        </div>
    );
  }


export default About;