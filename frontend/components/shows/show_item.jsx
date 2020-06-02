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

}

export default showItem;