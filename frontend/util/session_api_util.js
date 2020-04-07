export const postAdmin = admin => {
  return $.ajax({
    url: '/api/administrators',
    method: 'POST',
    data: { admin }
  })
}

export const postSession = administrator => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { administrator }
  })
}

export const deleteSession = () => {
  debugger;
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}