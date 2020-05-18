import React from 'react';
import {deleteMember, fetchMember} from '../../actions/member_actions';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


const memberItem = (member) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.session.currentAdmin);
  
  const handleDelete = () => {
    dispatch(deleteMember(member.member.id));
    history.push('/members');
  }

  const handleUpdate = () => {
    dispatch(fetchMember(member.member.id));
    history.push(`/members/${member.member.id}`);
  }

  const renderDelete = () => {
    if(currentAdmin != null){
      return(
        <button onClick={handleDelete}>Delete Member</button>
      );
    } else {
      return null;
    }
  }

  const renderUpdate = () => {
    if(currentAdmin != null) {
      return(
        <button onClick={handleUpdate}>Update Member</button>
      );
    } else {
      return null;
    }
  }

  return (
    <li key={member.member.id}>
      <div>Name:
        <div>{member.member.name}</div>
      </div>
      <div>Bio:
        <div>{member.member.bio}</div>
      </div>
      <div>
        {renderDelete()}
        {renderUpdate()}
      </div>
      <img src={member.member.photoUrl}/>
    </li>
  );
}

export default memberItem;