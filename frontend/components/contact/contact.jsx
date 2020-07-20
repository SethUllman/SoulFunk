import React from 'react';

const contact = () => {

  return(
    <div className='form-div'>
      <form className='form'>
        <h2>Contact</h2>
        <label>
          Title:
          <input type='text'></input>
        </label>
        <label id='text-label'>
          Body:
          <textarea/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default contact;