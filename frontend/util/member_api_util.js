export const postMember = member => {
  return $.ajax({
    url: '/api/members',
    method: 'POST',
    data: { member }
  })
}