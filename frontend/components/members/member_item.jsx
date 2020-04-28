import React from 'react';

const memberItem = (member) => {
  return (
    <li key={member.member.id}>
      <div>Name:
        <div>{member.member.name}</div>
      </div>
      <div>Bio:
        <div>{member.member.bio}</div>
      </div>
    </li>
  );
}

export default memberItem;