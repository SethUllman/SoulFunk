import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';

const contact = () => {


  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_ERJ64dUc', '#contact-form', 'user_Zc5AFeBhwbtAjm5JKVfCS')
      .then(() => {
        history.push('/home');
      });
  }


  return(
    <div className='form-div'>
      <form id='contact-form' className='form' onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <label>
          <input
            name='email'
            placeholder='Email or Phone Number'
          ></input>
        </label>
        <label>
          <input 
            name='title'
            type='text'
            placeholder='Email Title'
            ></input>
        </label>
        <label>
          <textarea 
            name='body'
            placeholder='Email Body'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default contact;