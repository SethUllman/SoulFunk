import React, {useState} from 'react';

const showForm = () => {

  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
        <button>Create Show</button>
      </form>
    </div>
  );
}

export default showForm;