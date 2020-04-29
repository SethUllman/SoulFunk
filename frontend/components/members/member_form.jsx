import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const memberForm = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');10

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
            name="filename" 
            accept="image/gif, image/jpeg, image/png"
            value={image}
            onChange={ (e) => {
              setImage(e.target.value);
            }} 
          />
        </label>
        <button type="submit">Create Member</button>
      </form>
    </div>
  )
}

export default memberForm;