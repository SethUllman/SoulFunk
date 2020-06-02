import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createShow} from '../../actions/show_actions';

const showForm = () => {

  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [charge, setCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const show = {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location: 
          <input 
            type='text'
            value={location}
            onChange={() => {setLocation(e.target.value)}}>
          </input>
        </label>
        <label>
          Time:
          <input 
            type='date-time'
            value={time}
            onChange={() => {setTime(e.target.value)}}>

          </input>
        </label>
        <label>
          Charge:
          <input 
            type='text'
            value={charge}
            onChange={() => {setCharge(e.target.value)}}>

          </input>
        </label>
        <button>Create Show</button>
      </form>
    </div>
  );
}

export default showForm;