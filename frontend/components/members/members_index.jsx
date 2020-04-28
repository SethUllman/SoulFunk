import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMembers, addMember, deleteMember, patchMember } from '../../actions/member_actions';
import MemberItem from './member_item';

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
    if (members != null){
      members.map(member => {
        return (<MemberItem member={member} />);
      });
    }
  }

  findMembers();
  members = useSelector(state => state.members);

  if (members != null){
    return(
      <div> 
        <div>
          Members of our band!
        </div>
        <ul>
          {members.map(member => {
            return <MemberItem member={member} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default membersIndex;