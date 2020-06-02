import React from 'react';

const showForm = () => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location: 
          <input type='text'>

          </input>
        </label>
        <label>
          Time:
          <input type='date-time'>
            
          </input>
        </label>
      </form>
    </div>
  );
}

export default showForm;