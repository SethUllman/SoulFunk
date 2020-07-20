import React, {useState} from 'react';
import useHistory from 'react-router-dom';

const contact = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');



  return(
    <div className='form-div'>
      <form className='form'>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default contact;