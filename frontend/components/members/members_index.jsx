import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMembers, addMember, deleteMember, patchMember } from '../../actions/member_actions';

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
    
  }
  findMembers();
  members = useSelector(state => state.members);
  return(
    <div> 
      <div>
        Members of our band!
      </div>
      <div>
        {() => {
          if (members != null){
            console.log(members)
          }
        }}
      </div>
    </div>
  );
}

export default membersIndex;