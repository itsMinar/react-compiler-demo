// import React from 'react';

function ShowCount({ title, count }) {
  console.log(`Rendering ShowCount - ${title}...`);

  return (
    <p>
      {title} is {count}
    </p>
  );
}

export default ShowCount;

/* const MemoShowCount = React.memo(ShowCount);
export default MemoShowCount; */
