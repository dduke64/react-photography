import React, {useState, useRef} from 'react';
import { useMyContext } from '../../utils/context';
import { Home, Camera, Code, Mail, Facebook, Instagram, Linkedin } from "react-feather";

import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact () {

  const form = useRef();

  const { data } = useMyContext();

  const [templateParams, setTemplateParams] = useState({
    to_name: 'daniel',
    from_name: 'bob',
    message: 'Check this out!'
  })

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('default_service', 'template_vw2r8bl', form.current, 'Fzfpy29g3SDJI5zs4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div>
          <h2 className='page-header'>{data?.Contact.title}</h2>
            <p className='page-intro'>
            {data?.Contact.intro}
            </p>
            <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-input'>
              <label>Name:</label>
              <input className='input' type="text" name="user_name" />
              </div>
              <div className='form-input'>
              <label>Email:</label>
              <input className='input' type="email" name="user_email" />
              </div>
              <div className='form-input'>
              <label>Message:</label>
              <textarea className='input' style={{height: '8rem'}} name="message" />
              </div>
              <input type="submit" value="Send" />
            </form>
            </div>
            <div className='icons-container'>
    <a href="google.com" style={{color:'black'}}><Facebook size={32} /></a>
    <a href="google.com" style={{color:'black'}}><Instagram size={32}/></a>
    <a href="google.com" style={{color:'black'}}><Linkedin size={32}/></a>

    </div>

        </div>
    );
  }


export default Contact;