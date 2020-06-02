export const fetchShows = () => {
  return $.ajax({
    url: '/api/shows',
    method: 'GET'
  })
}

export const postShow = show => {
  return $.ajax({
    url: '/api/shows',
    method: 'POST',
    data: show,
    contentType: false,
    processData: false
  })
}

export const removeShow = showId => {
  return $.ajax({
    url: `/api/shows/${showId}`,
    method: 'DELETE'
  })
}

export const updateShow = show => {
  return $.ajax({
    url: `/api/shows/${show.id}`,
    method: 'PATCH',
    data: show
  })
}

