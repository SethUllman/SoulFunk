import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchShows} from '../../actions/show_actions';
import ShowItem from './show_item';

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

  const addShow = () => {
    if (currentAdmin != null){
      return(
        <div>
          <button 
            className='button'
            onClick={() => {history.push('/new-show')}}
          >Add Show</button>
        </div>
      );
    }
  }

  findShows();
  shows = useSelector(state => state.shows);

  if (shows != null){
    return(
      <div className='shows-div'>
        <h2>Upcoming Shows</h2>
        <ul className='shows-index'>
          {shows.map(show => {
            return <ShowItem key={show.id} show={show} />;
          })}
        </ul>
        <div>
          {addShow()}
        </div>
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  }
}

export default showIndex;