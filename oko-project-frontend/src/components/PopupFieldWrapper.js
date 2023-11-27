import React from 'react';
function FullStringPopupInput({ categoryName, children }) {
  return (
    <>
      <div className="full-string-popup-field__category">
        <p className="full-string-popup__category-name">{categoryName}</p>
        {children}
      </div>
    </>
  );
}

export default FullStringPopupInput;
