import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchShows} from '../../actions/show_actions';

const showIndex = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.session.currentAdmin);
  let shows = useSelector(state => state.shows);

  const findShows = () => {
    if (shows == null){
      dispatch(fetchShows());
    }
  }

  return(
    <div>
      
    </div>
  )
}

export default showIndex;