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
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleFile = (e) => {

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }



  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("member[name]", name);
    formData.append("member[bio]", bio);

    if (photoFile){
      formData.append('member[photo]', photoFile);
    }

    dispatch(addMember(formData))
      .then(() => {
        history.push('/members');
      })
  }

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form'>
          <h2>Create New Member</h2>
          <label>
            <input 
              type="text" 
              value={name}
              placeholder='Name'
              onChange={(e) => {
                setName(e.target.value);
              }}/>
          </label>
          <label style={{height: '25%'}}>
            <textarea 
              placeholder='Biography'
              value={bio}  
              onChange={(e) => {
                setBio(e.target.value);
              }}
              />
          </label>
          
          <div>
            <input 
              type="file" 
              accept="image/gif, image/jpeg, image/png"
              onChange={handleFile} 
            />
            {photoUrl ? <img  src={photoUrl} /> : null}
          </div>
          <button className='button' type="submit">Create Member</button>
      </form>
    </div>
  )
}

export default memberForm;