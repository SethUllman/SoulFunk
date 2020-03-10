export const postAdmin = admin => {
  return $.ajax({
    url: '/api/administrators',
    method: 'POST',
    data: { user }
  })
}

export const postSession = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
}

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}