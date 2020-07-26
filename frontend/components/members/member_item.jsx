import React from 'react';
import {deleteMember, fetchMember} from '../../actions/member_actions';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';


const memberItem = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(state => state.session.currentAdmin);
  
  const handleDelete = () => {
    dispatch(deleteMember(props.member.id));
    history.push('/members');
  }

  const handleUpdate = () => {
    dispatch(fetchMember(props.member.id));
    history.push(`/members/${props.member.id}`);
  }

  const renderDelete = () => {
    if(currentAdmin != null){
      return(
        <li className='member-delete button' onClick={handleDelete}>
          <AiFillDelete size='50px' color='white'></AiFillDelete>
        </li>
      );
    } else {
      return null;
    }
  }

  const renderUpdate = () => {
    if(currentAdmin != null) {
      return(
        <li className='member-update' onClick={handleUpdate}>
          <AiFillEdit size='50px' color='white'></AiFillEdit>
        </li>
      );
    } else {
      return null;
    }
  }

  const findClass = () => {
    if (props.counter % 2 == 0) {
      return 'member-li-true';
    } else {
      return 'member-li-false';
    }
  }

  return (
    <li key={props.member.id} className={findClass()}>
      <div className='member-info'>
        <img className='member-photo TextWrap' src={props.member.photoUrl} />
        <div>
          <div className='member-name'>{props.member.name}</div>
          <div className='member-bio'>{props.member.bio}</div>
        </div>
      </div>
      <ul className='member-admin-buttons'>
        {renderDelete()}
        {/* {renderUpdate()} */}
      </ul>
    </li>
  );
}

export default memberItem;