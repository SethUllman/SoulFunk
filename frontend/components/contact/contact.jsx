import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';

const contact = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_ERJ64dUc', e.target, 'user_Zc5AFeBhwbtAjm5JKVfCS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


  }


  return(
    <div className='form-div'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <label>
          Email or Phone Number:
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}  
          ></input>
        </label>
        <label>
          Title:
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            ></input>
        </label>
        <label id='text-label'>
          Body:
          <textarea 
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default contact;