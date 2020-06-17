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

  const cityState = () => {
    const city = show.show.city;
    const state = show.show.state;

    return (`${city}, ${state}`);
  }

  return (
    <li key={show.show.id}>
      <div>{`${show.show.venue} @ ${show.show.time}`}</div>
      <div>{cityState()}</div>
      <div>{show.show.date}</div>
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