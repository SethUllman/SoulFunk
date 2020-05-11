import React from 'react';
import {deleteMember} from '../../actions/member_actions';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const memberItem = (member) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMember(member.member.id));
    history.push('/members');
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
        <button onClick={handleDelete}>Delete Member</button>
      </div>
    </li>
  );
}

export default memberItem;