import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { fetchMembers, addMember, deleteMember, patchMember } from '../../actions/member_actions';
import MemberItem from './member_item';

const membersIndex = () => {
  
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.currentAdmin);
  const history = useHistory();
  let members = useSelector(state => state.members);
  let admin = useSelector(state => state.session.currentAdmin);
  let counter = 0;

  const findMembers = () => {
    if (members == null){
      dispatch(fetchMembers());
      
    }
  }

  const addMember = () => {
    if (admin != null){
      return(
        <button 
          className='button' onClick={() => {history.push('/new-member')}}
        >Create New Member</button>
      );
    }
  }

  findMembers();
  if (members != null){
    return(
      <div> 
        <div className='page-banner'>
          <img src='assets/Moss-table.png' />
          {/* <div className='full-band-text'>The Band</div> */}
        </div>
        <ul className='members-ul'>
          {members.map((member, counter) => {
            counter++;
            return <MemberItem key={member.id} member={member} counter={counter} />;
          })}
        </ul>
        
        {addMember()}
      
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  }
}

export default membersIndex;