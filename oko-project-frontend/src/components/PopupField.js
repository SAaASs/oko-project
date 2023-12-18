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
  const [isValid, setIsValid] = React.useState(
    !pickedNote.errString.includes(inputFormName) &
      (pickedNote.currentMode == 'edit')
  );
  return (
    <>
      <div className="full-string-popup-field__wrapper">
        <p
          className={
            isValid
              ? 'full-string-popup-field__name'
              : 'full-string-popup-field__name full-string-popup-field__name-red'
          }
        >
          {inputName}
        </p>
        <input
          className="full-string-popup-field__input"
          name={inputFormName}
          onInput={(e) => {
            inputValueChanger(e.target.value);
            if (e.target.value.match(regexp)) {
              setIsValid(true);
              pickedNote.setErrString(
                pickedNote.errString.replace(inputFormName, '')
              );
            } else {
              setIsValid(false);
              pickedNote.setErrString(
                pickedNote.errString.replace(inputFormName, '') + inputFormName
              );
            }
          }}
          value={inputValue}
        ></input>
      </div>
    </>
  );
}

export default FullStringPopupInput;
