import React, {useState, useEffect} from 'react';
import { getData } from '../../siteData'


function Home() {
  const [stateData, setStateData] = useState();


  useEffect(() => {
    getData().then(data => {
      setStateData(data)
      })
  },[]);



    return (
        <div>
          <h2 className='page-header'>{stateData?.Home.title}</h2>
          <p className='page-intro'>{stateData?.Home.intro}</p>
        </div>
    );
  }


export default Home;