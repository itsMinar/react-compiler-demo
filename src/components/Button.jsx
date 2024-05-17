// import React from 'react';

function Button({ onPress, children }) {
  console.log(`Rendering Button - ${children}...`);

  return (
    <div>
      <button type="button" onClick={onPress}>
        {children}
      </button>
    </div>
  );
}

export default Button;

/* const MemoButton = React.memo(Button);
export default MemoButton; */
