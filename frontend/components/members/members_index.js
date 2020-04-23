import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMembers, addMember, deleteMember, patchMember } from '../../actions/member_actions';

const membersIndex = () => {
  
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.currentAdmin);
  dispatch(fetchMembers());
  const members = useSelector(state => state.members);

  return(
    <div>
      <div>
        Members of our band!
      </div>
      <div>
        {members}
      </div>
    </div>
  );
}