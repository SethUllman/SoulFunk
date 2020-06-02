import React from 'react';
import {deleteShow, fetchShow} from '../../actions/show_actions';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const showItem = (show) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.session.currentAdmin);

  const handleDelete = () => {
    dispatch(deleteShow(show.id));
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

}

export default showItem;