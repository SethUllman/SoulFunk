import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addShow} from '../../actions/show_actions';

const showForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [showDate, setDate] = useState('');
  const [time, setTime] = useState('');
  const [charge, setCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let showTime = `${showDate} | ${time}`;
    formData.append("show[venue]", venue);
    formData.append("show[time]", showTime);
    formData.append("show[charge]", charge);

    dispatch(addShow(formData))
      .then(() => {
        history.push('/shows');
      })
  }

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Create New Show</h2>
        <label>
          <input type="hidden" name="country" id="countryId" value="US" />
          <select name="state" className="states order-alpha" id="stateId">
            <option value="">Select State</option>
          </select>
        </label>
        <label>
          <select name="city" className="cities order-alpha" id="cityId">
            <option value="">Select City</option>
          </select>
        </label>
        <label>
          Venue: 
          <input 
            type='text'
            value={location}
            onChange={(e) => {setLocation(e.target.value)}}>
          </input>
        </label>
        <label>
          Date:
          <input 
            type='date'
            value={showDate}
            onChange={(e) => {setDate(e.target.value)}}>
          </input>
        </label>
        <label>
          Time:
          <input 
            type='time'
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
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <script src="//geodata.solutions/includes/statecity.js"></script>
    </div>
  );
}

export default showForm;