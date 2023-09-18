import React from 'react';
import { useMyContext } from '../../utils/context';


function Home() {

  const { data } = useMyContext();

    return (
        <div>
          <h2 className='page-header'>{data?.Home.title}</h2>
          <p className='page-intro'>{data?.Home.intro}</p>
        </div>
    );
  }


export default Home;