import {postEmail} from '../util/mailer_api_util';

export const CREATE_EMAIL = 'CREATE_EMAIL';

const createEmail = email => {
  return {
    type: CREATE_EMAIL,
    email
  }
}

export const addEmail = (email) => dispatch => {
  return postEmail(email)
    .then(email => dispatch(createEmail(email)));
}