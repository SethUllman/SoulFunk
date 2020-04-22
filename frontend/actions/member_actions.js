import * as APIUtil from '../util/member_api_util';
import { create } from 'domain';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const CREATE_MEMBER = 'CREATE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';

const receiveMembers = members => {
  return {
    type: RECEIVE_MEMBERS,
    members
  }
}

const createMember = member => {
  return {
    type: CREATE_MEMBER,
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

export const fetchMembers = () => dispatch => {
  return APIUtile.fetchMembers()
    .then((members) => dispatch(receiveMembers(members)));
}

export const addMember = (member) => dispatch => {
  return APIUtil.createMember(member)
    .then(member => dispatch(createMember(member)));
}

export const deleteMember = (memberId) => dispatch => {
  return APIUtil.removeMember(memberId)
    .then(memberId => dispatch(removeMember(memberId)));
}

export const patchMember = (member) => dispatch => {
  return APIUtil.updateMember(member)
    .then(member => dispatch(updateMember(member)));
}

