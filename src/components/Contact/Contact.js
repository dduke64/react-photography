import React from 'react';


function Contact ({labels}) {


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