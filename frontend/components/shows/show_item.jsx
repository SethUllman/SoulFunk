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
    
    const newDate = new Intl.DateTimeFormat("en-US", {
      weekday: 'short',
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(show.show.date);
    return newDate;
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