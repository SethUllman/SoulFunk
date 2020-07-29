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
        <button 
          className='button'
          onClick={() => {history.push('/new-show')}}
        >Add Show</button>
      );
    }
  }

  const sortShows = (shows) => {
    let newShows = shows.slice();
    newShows.sort(function(a,b){
      return (new Date(a.date) - new Date(b.date));
    });
    return newShows;
  }

  const anyShows = (shows) => {
    if(shows.length == 0){
      return(
        <h3 className='no-shows'>No Upcoming Shows</h3>
      );
    }
  }

  findShows();
  shows = useSelector(state => state.shows);
  
  if (shows != null){
    return(
      <div>
        <div className='page-banner'>
          <img src={window.fullBand} />
        </div>
        <div className='show-content'>
          
          <h2>Upcoming Shows</h2>
          {anyShows(shows)}
          <ul className='shows-index'>
            {sortShows(shows).map(show => {
              return <ShowItem key={show.id} show={show} />;
            })}
          </ul>
          
          {addShow()}
        </div>
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  }
}

export default showIndex;