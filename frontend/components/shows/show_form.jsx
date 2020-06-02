import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addShow} from '../../actions/show_actions';

const showForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [charge, setCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("show[location]", location);
    formData.append("show[time]", time);
    formData.append("show[charge]", charge);

    dispatch(addShow(formData))
      .then(() => {
        history.push('/shows');
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location: 
          <input 
            type='text'
            value={location}
            onChange={(e) => {setLocation(e.target.value)}}>
          </input>
        </label>
        <label>
          Time:
          <input 
            type='datetime-local'
            value={time}
            onChange={(e) => {setTime(e.target.value)}}>

          </input>
        </label>
        <label>
          Charge:
          <input 
            type='number'
            min='0'
            step='any'
            value={charge}
            onChange={(e) => {setCharge(e.target.value)}}>

          </input>
        </label>
        <button>Create Show</button>
      </form>
    </div>
  );
}

export default showForm;