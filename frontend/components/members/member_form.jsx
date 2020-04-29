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
          <input type="text" />
        </label>
        <label>
          Member Bio:
          <textarea />
        </label>
        <label>
          Member Image:
          <input type="file" name="filename" accept="image/gif, image/jpeg, image/png" />
        </label>
        <button type="submit">Create Member</button>
      </form>
    </div>
  )
}

export default memberForm;