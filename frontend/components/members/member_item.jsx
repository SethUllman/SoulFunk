import React from 'react';

const memberItem = (member) => {
  return (
    <li>
      <div>Name:
        <div>{member.name}</div>
      </div>
      <div>Bio:
        <div>{member.bio}</div>
      </div>
    </li>
  );
}

export default memberItem;