export const postEmail = email => {
  return $.ajax({
    url: '/api/mailer',
    method: 'POST',
    data: email
  })
}