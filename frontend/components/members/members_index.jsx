import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMembers, addMember, deleteMember, patchMember } from '../../actions/member_actions';
import memberItem from './member_item';

const membersIndex = () => {
  
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.currentAdmin);
  let members = useSelector(state => state.members);

  const findMembers = () => {
    if (members == null){
      dispatch(fetchMembers());
      
    }
  }

  const membersList = () => {
    members.map(member => (
      <memberItem member={member}/>
    ))
  }

  findMembers();
  members = useSelector(state => state.members);


  return(
    <div> 
      <div>
        Members of our band!
      </div>
    </div>
  );
}

export default membersIndex;