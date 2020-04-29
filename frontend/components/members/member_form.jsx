import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {createMember} from '../../actions/member_actions';

const memberForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const readURL = (input) => {
    debugger;
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  const handleSubmit = () => {
    const member = Object.assign({}, {name: name, bio: bio, image: image});
    dispatch(createMember(member));
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
            value={image}
            onChange={ (e) => {
              debugger;
              setImage(e.target.value);
              readURL(this);
            }} 
          />
          <img id="new-member" src="#" />
        </label>
        <button type="submit">Create Member</button>
      </form>
    </div>
  )
}

export default memberForm;