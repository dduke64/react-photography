import React, {useRef} from 'react';
import { useMyContext } from 'utils/context';
import {  Facebook, Instagram, Linkedin } from "react-feather";
import { IsMobile } from 'utils/checkMobile';
import 'App.css'
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact () {
  console.log(IsMobile())
  const form = useRef();
  const { data } = useMyContext();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('default_service', 'template_vw2r8bl', form.current, 'Fzfpy29g3SDJI5zs4')
        .then((result) => {
            console.log(result.text);
            alert("Success")
        }, (error) => {
            console.log(error.text);
            alert("Error, please try again")
        });
    };



    return (
        <div>
          <h2 className='page-header'>{data?.Contact.title}</h2>
            <p className='page-intro'>
            {data?.Contact.intro}
            </p>
            {IsMobile() ? 
            <div>
              <div className='flex-center form-container'>
                <form className='mobile-form' ref={form} onSubmit={sendEmail}>
                  <div className='flex-center mobile-form-input'>
                    <label>Name:</label>
                    <input required placeholder='name' className='mobile-input' type="text" name="user_name" />
                  </div>
                  <div className='flex-center mobile-form-input'>
                    <label>Email:</label>
                    <input required placeholder='example@email.com' className='mobile-input' type="email" name="user_email" />
                  </div>
                  <div className='flex-center mobile-form-input'>
                    <label>Message:</label>
                    <textarea required  placeholder='write your message here' className='mobile-input' style={{height: '8rem'}} name="message" />
                  </div>
                  <div className='submit'>
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div> 
            : 
            <div>
              <div className='flex-center form-container'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='form-input'>
                    <label>Name:</label>
                    <input required placeholder='name' className='input' type="text" name="user_name" />
                  </div>
                  <div className='form-input'>
                    <label>Email:</label>
                    <input required placeholder='example@email.com' className='input' type="email" name="user_email" />
                  </div>
                  <div className='form-input'>
                    <label>Message:</label>
                    <textarea required  placeholder='write your message here' className='input' style={{height: '8rem'}} name="message" />
                  </div>
                  <div className='submit'>
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>}

            <div className='flex-center icons-container'>
    <a href="https://www.google.com" style={{color:'black'}}><Facebook size={32} /></a>
    <a href="google.com" style={{color:'black'}}><Instagram size={32}/></a>
    <a href="google.com" style={{color:'black'}}><Linkedin size={32}/></a>

    </div>

        </div>
    );
  }


export default Contact;