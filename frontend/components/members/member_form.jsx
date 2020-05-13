import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addMember} from '../../actions/member_actions';

const memberForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [photoFile, setPhotoFile] = useState(null);

  const handleFile = (e) => {
    setPhotoFile(e.currentTarget.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("member[name]", name);
    formData.append("member[bio]", bio);

    if (photoFile){
      formData.append('member[member_photo]', photoFile);
    }

    dispatch(addMember(formData));
    history.push('/members');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Member Name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}/>
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
        <label>
          Member Image:
          <input 
            type="file" 
            accept="image/gif, image/jpeg, image/png"
            onChange={handleFile} 
          />
          <img id="new-member" src={photoFile} />
        </label>
        <button type="submit">Create Member</button>
      </form>
    </div>
  )
}

export default memberForm;