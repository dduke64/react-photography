import React, {useState, useEffect} from 'react';
import { getData } from '../../siteData'


function Home() {

  const [labels, setlabels] = useState();
  useEffect(() => {
    getData().then(data => {
      setlabels(data)
      })
  },[]);

    return (
        <div>
          <h2 className='page-header'>{labels?.Home.title}</h2>
          <p className='page-intro'>{labels?.Home.intro}</p>
        </div>
    );
  }


export default Home;