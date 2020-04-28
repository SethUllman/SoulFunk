import React from 'react';
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

  const findMembers = () => {
    if (members == null){
      dispatch(fetchMembers());
      
    }
  }

  const addMember = () => {
    if (admin != null){
      return(
        <div>
          <button onClick={() => {history.push('/new-member')}}>Add Member</button>
        </div>
      );
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
            return <MemberItem key={member.id} member={member} />;
          })}
        </ul>
        <div>
          {addMember()}
        </div>
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  }
}

export default membersIndex;