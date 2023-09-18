import React from 'react';
import { useMyContext } from '../../utils/context';



function Contact () {

  const { data } = useMyContext();


    return (
        <div>
          <h2 className='page-header'>{data?.Contact.title}</h2>
          <form>
            <p className='page-intro'>
            {data?.Contact.intro}
            </p>
          </form>
        </div>
    );
  }


export default Contact;