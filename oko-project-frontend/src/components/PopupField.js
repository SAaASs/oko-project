import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
function FullStringPopupInput({
  inputName,
  inputFormName,
  inputValue,
  inputValueChanger,
  regexp,
}) {
  const pickedNote = React.useContext(PickedNoteContext);
  const [amIBand, setAmIBad] = React.useState();
  return (
    <>
      <div className="full-string-popup-field__wrapper">
        <p className="full-string-popup-field__name">{inputName}</p>
        <input
          className="full-string-popup-field__input"
          name={inputFormName}
          onInput={(e) => {
            inputValueChanger(e.target.value);
            if (inputValue.match(regexp)) {
              setAmIBad(false);
            } else {
              setAmIBad(true);
            }
          }}
          value={inputValue}
        ></input>
        {amIBand && (
          <span className="full-string-popup-field__error">
            Вы насрали в инпут, убирайте
          </span>
        )}
      </div>
    </>
  );
}

export default FullStringPopupInput;
