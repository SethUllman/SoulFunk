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
    <div className='member-form-div'>
      <form onSubmit={handleSubmit} className='member-form'>
        <div className='member-title-div'>
          <h1 className='member-form-title'>Create New Member</h1>
        </div>
        <div className='member-form-name-div'>
          <label className='member-form-name'>
            Member Name:
          </label>
          <div className='member-name-input-div'>
            <input 
              className='member-name-input'
              type="text" 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}/>
          </div>
        </div>
        <div className='member-form-bio-div'>
          <label className='member-form-bio'>
            Member Bio:
          </label>
          <div className='member-bio-textarea-div'>
            <textarea 
              className='member-bio-textarea'
              value={bio}  
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='member-form-image-div'>
          <label className='member-form-image-label'>
            Member Image:
          </label>
          <div className='member-image-input-div'>
            <input 
              className='member-form-image-input'
              type="file" 
              accept="image/gif, image/jpeg, image/png"
              onChange={handleFile} 
            />
            {photoUrl ? <img className='member-form-image' src={photoUrl} /> : null}
          </div>
        </div>
        <div className='member-create-div'>
          <button className='member-create-button' type="submit">Create Member</button>
        </div>
      </form>
    </div>
  )
}

export default memberForm;