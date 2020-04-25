import React from 'react';

const memberItem = (member) => {
  return (
    <div>
      <div>{member.name}</div>
      <div>{member.description}</div>
    </div>
  );
}

export default memberItem;