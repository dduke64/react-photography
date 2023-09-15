import React from 'react';


function Home({labels}) {

    return (
        <div>
          <h2 className='page-header'>{labels?.Home.title}</h2>
          <p className='page-intro'>{labels?.Home.intro}</p>
        </div>
    );
  }


export default Home;