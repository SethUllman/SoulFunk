import * as APIUtil from '../util/show_api_util';

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';
export const CREATE_SHOW = 'CREATE_SHOW';
export const REMOVE_SHOW = 'REMOVE_SHOW';
export const UPDATE_SHOW = 'UPDATE_SHOW';

const receiveShows = shows => {
  return {
    type: RECEIVE_SHOWS,
    shows
  }
}

const createShow = show => {
  return {
    type: CREATE_SHOW,
    show
  }
}

const removeShow = showId => {
  return {
    type: REMOVE_SHOW,
    showId
  }
}

const updateShow = show => {
  return {
    type: UPDATE_SHOW,
    show
  }
}

export const fetchShows = () => dispatch => {
  return APIUtil.fetchShows()
    .then((shows) => dispatch(receiveShows(shows)));
}

export const addShow = (show) => dispatch => {
  return APIUtil.postShow(show)
    .then(show => dispatch(createShow(show)));
}

export const deleteShow = showId => dispatch => {
  return APIUtil.removeShow(showId)
    .then(showId => dispatch(removeShow(showId)));
}

export const patchShow = show => dispatch => {
  return APIUtil.updateShow(show)
    .then(show => dispatch(updateShow(show)));
}