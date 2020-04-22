import {postMember, removeMember, updateMember} from '../util/member_api_util';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';

const receiveMember = member => {
  return {
    type: RECEIVE_MEMBER,
    member
  }
}

const removeMember = memberId => {
  return {
    type: REMOVE_MEMBER,
    memberId
  }
}

const updateMember = member => {
  return {
    type: UPDATE_MEMBER,
    member
  }
}

