import React from 'react';
import {useSelector, useDispatch} from 'react-dom';

const memberForm = () => {
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