import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {updateMember} from '../../actions/member_actions';

const memberUpdateForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  // const member = useSelector(state => state.members);
  // const [name, setName] = useState(member.name);
  // const [bio, setBio] = useState(member.bio);
  // const [photo, setPhoto] = useState(member.photoUrl);

  const handleUpdate = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const member = useSelector(state => state.members);
    const [name, setName] = useState(member.name);
    const [bio, setBio] = useState(member.bio);
    const [photo, setPhoto] = useState(member.photoUrl);
  })

  console.log(name);
  if (member != null){
    return (
      <div>
        <form>
          <label>
            Member Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }} />
          </label>
          <label>
            Member Bio:
            <textarea
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </label>
          {/* <label>
            Member Image:
            <input
              type="file"
              accept="image/gif, image/jpeg, image/png"
              onChange={handleFile}
            />
            {photoUrl ? <img src={photoUrl} /> : null}
          </label> */}
          <button type="submit">Create Member</button>
        </form>
      </div>
    );

  } else {
    return <div>Loading...</div>
  }
}

export default memberUpdateForm;