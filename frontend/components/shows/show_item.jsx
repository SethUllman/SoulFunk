import React from 'react';
import {deleteShow, fetchShow} from '../../actions/show_actions';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const showItem = (show) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.session.currentAdmin);

  const handleDelete = () => {
    dispatch(deleteShow(show.show.id));
    history.push('/shows');
  }

  const renderDelete = () => {
    if(currentAdmin != null){
      return(
        <button onClick={handleDelete}>Delete Show</button>
      );
    } else {
      return null;
    }
  }

  const formatTime = () => {
    let showTime = show.show.time.split('T');
    let date = showTime[0];
    let time = showTime[1];
    time = time.split(".");
    time = time[0];
    time = time.split(":");
    let meridian = "AM";
    let hour = parseInt(time[0]);
    let minutes = time[1];
    if (hour > 12) {
      hour = hour%12;
      meridian = "PM";
    }
    return (`${date} ${hour}:${minutes} ${meridian}`);
  }

  return (
    <li key={show.show.id}>
      <div>Location:
        <div>{show.show.location}</div>
      </div>
      <div>Time:
        <div>{formatTime()}</div>
      </div>
      <div>Charge:
        <div>{`$${show.show.charge}`}</div>
      </div>
      <div>
        {renderDelete()}
      </div>
    </li>
  );
}

export default showItem;