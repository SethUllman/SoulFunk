import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchShows } from '../../actions/show_actions';
import ShowItem from '../shows/show_item';

const Home = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  let shows = useSelector(state => state.shows);

  const findShows = () => {
    if (shows == null) {
      dispatch(fetchShows());
    }
  }

  findShows();
  shows = useSelector(state => state.shows);

  const displayShows = () => {
    if (shows != null) {
      return (
        <div className='home-shows'>
          <div>
            <h2>Upcoming Shows</h2>
          </div>
          <ul className='shows-index'>
            {shows.map(show => {
              return <ShowItem key={show.id} show={show} />;
            })}
          </ul>
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }
  }

  return(
    <div>
      <div className='page-banner'>
        <img src='assets/full-band3.jpg'></img>
      </div>
      <div className='band-description'>
        <p>
          Billings Local soul band, formerly known as The MSUB Old Soles. 
          We’re all about playing that sweet, funky soul music, 
          and we’d love to give you a taste!
        </p>
      </div>
      <div className='home-shows'>
      {displayShows()}
      </div>
      <div className='home-insta'>
        <script type="text/javascript">{
          /* curator-feed-default-feed-layout */
          (function(){
          var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
          i.src = "https://cdn.curator.io/published/41ba390f-bfb0-41d3-8d1f-60edb5895100.js";
          e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
          })()}
        </script>
        <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag" samesite='None'>Powered by Curator.io</a></div>
      </div>
    </div>
  )

}

export default Home;