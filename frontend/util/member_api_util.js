export const postMember = member => {
  return $.ajax({
    url: '/api/members',
    method: 'POST',
    data: { member }
  })
}

export const removeMember = memberId => {
  return $.ajax({
    url: `/api/members/${memberId}`,
    method: 'DELETE'
  })
}

export const updateMember = member => {
  return $.ajax({
    url: `/api/members/${member.id}`,
    method: 'PATCH',
    data: member
  })
}