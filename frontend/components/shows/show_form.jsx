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
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [charge, setCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let newDate = new Date(date);
    newDate = (formatDate(newDate));
    let newTime = new Date(date);
    newTime = (formatTime(newTime));
    formData.append("show[venue]", venue);
    formData.append("show[city]", city);
    formData.append("show[state]", state);
    formData.append("show[date]", newDate);
    formData.append("show[time]", newTime);
    formData.append("show[charge]", charge);
    dispatch(addShow(formData))
      .then(() => {
        history.push('/shows');
      })
  }

  const formatDate = (date) => {
    const newDate = new Intl.DateTimeFormat("en-US", {
      weekday: 'short',
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(date);
    return newDate;
  }

  const formatTime = (time) => {
    const newTime = new Intl.DateTimeFormat("en-US", {
      hour: 'numeric',
      minute: 'numeric'
    }).format(time);
    return newTime;
  }

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Create New Show</h2>
        <label>
          <input type="hidden" name="country" id="countryId" value="US" />
          <select name="state" className="states order-alpha" id="stateId"
            onChange={(e) => {setState(e.target.value)}}>
            <option value="">Select State</option>
          </select>
        </label>
        <label>
          <select name="city" className="cities order-alpha" id="cityId"
            onChange={(e) => {setCity(e.target.value)}}>
            <option value="">Select City</option>
          </select>
        </label>
        <label>
          Venue: 
          <input 
            type='text'
            value={venue}
            onChange={(e) => {setVenue(e.target.value)}}>
          </input>
        </label>
        <label>
          Date:
          <input 
            type='datetime-local'
            value={date}
            onChange={(e) => {setDate(e.target.value)}}>
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