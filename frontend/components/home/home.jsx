import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchShows } from '../../actions/show_actions';
import ShowItem from '../shows/show_item';

const Home = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  let shows = useSelector(state => state.shows);

  const findShows = () => {
    if (shows == null) {
      dispatch(fetchShows());
    }
  }

  const anyShows = (shows) => {
    if (shows.length == 0) {
      return (
        <h3 className='no-shows'>No Upcoming Shows</h3>
      );
    }
  }

  const sortShows = (shows) => {
    let newShows = shows.slice();
    newShows.sort(function (a, b) {
      return (new Date(a.date) - new Date(b.date));
    });
    return newShows;
  }

  findShows();
  shows = useSelector(state => state.shows);

  const displayShows = () => {
    if (shows != null) {
      return (
        <div className='show-content'>
          
          <h2>Upcoming Shows</h2>
          {anyShows(shows)}
          <ul className='shows-index'>
            {sortShows(shows).map(show => {
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
        <img src={window.fullBand3}></img>
      </div>
      <div className='band-description'>
        <p>
          Billings Local soul band, formerly known as The MSUB Old Soles. 
          We’re all about playing that sweet, funky soul music, 
          and we’d love to give you a taste!
        </p>
      </div>
      
      {displayShows()}
      
      <div className='home-insta'>
        <script type="text/javascript">{
          (function(){
          var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
          i.src = "https://cdn.curator.io/published/41ba390f-bfb0-41d3-8d1f-60edb5895100.js";
          if(!loaded){
            e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
            setLoaded(true);
          }
          })()}
        </script>
        <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag" >Powered by Curator.io</a></div>
      </div>
    </div>
  )

}

export default Home;