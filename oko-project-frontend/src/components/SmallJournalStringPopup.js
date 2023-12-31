import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
import PopupField from './PopupField';
import { api } from '../utils/api';
function SmallJournalStringPopup() {
  const pickedNote = React.useContext(PickedNoteContext);
  const [noteNumber, setNoteNumber] = React.useState('');
  const [diagramId, setDiagramId] = React.useState('');
  const [pressEquipDate, setPressEquipDate] = React.useState('');
  const [pairId, setPairId] = React.useState('');
  const [pairFullMarkLeft, setPairFullMarkLeft] = React.useState('');
  const [pairFullMarkRight, setPairFullMarkRight] = React.useState('');
  const [hubDiameterLeft, setHubDiameterLeft] = React.useState('');
  const [hubDiameterRight, setHubDiameterRight] = React.useState('');
  const [tensionLeft, setTensionLeft] = React.useState('');
  const [tensionRight, setTensionRight] = React.useState('');
  const [pressurePowerUpLeft, setPressurePowerUpLeft] = React.useState('');
  const [pressurePowerUpRight, setPressurePowerUpRight] = React.useState('');
  const [distanceBetweenInnerAndSide, setDistanceBetweenInnerAndSide] =
    React.useState('');
  const [goodOrBad, setGoodOrBad] = React.useState('');
  const [mastersAcception, setMastersAcception] = React.useState('');
  React.useEffect(() => {
    setNoteNumber(pickedNote.currentNote.noteNumber);
    setDiagramId(pickedNote.currentNote.diagramId);
    setPressEquipDate(pickedNote.currentNote.pressEquipDate);
    setPairId(pickedNote.currentNote.pairId);
    setPairFullMarkLeft(pickedNote.currentNote.pairFullMarkLeft);
    setPairFullMarkRight(pickedNote.currentNote.pairFullMarkRight);
    setHubDiameterLeft(pickedNote.currentNote.hubDiameterLeft);
    setHubDiameterRight(pickedNote.currentNote.hubDiameterRight);
    setTensionLeft(pickedNote.currentNote.tensionLeft);
    setTensionRight(pickedNote.currentNote.tensionRight);
    setPressurePowerUpLeft(pickedNote.currentNote.pressurePowerUpLeft);
    setPressurePowerUpRight(pickedNote.currentNote.pressurePowerUpRight);
    setDistanceBetweenInnerAndSide(
      pickedNote.currentNote.distanceBetweenInnerAndSide
    );
    setGoodOrBad(pickedNote.currentNote.goodOrBad);
    setMastersAcception(pickedNote.currentNote.mastersAcception);
  }, [pickedNote.currentNote]);
  const editHandler = () => {
    const result = {
      noteNumber,
      diagramId,
      pressEquipDate,
      pairId,
      pairFullMarkLeft,
      pairFullMarkRight,
      hubDiameterLeft,
      hubDiameterRight,
      tensionLeft,
      tensionRight,
      pressurePowerUpLeft,
      pressurePowerUpRight,
      distanceBetweenInnerAndSide,
      goodOrBad,
      mastersAcception,
    };
    if (pickedNote.currentMode == 'create') {
      api
        .createSmallNote(result)
        .then(() => {
          alert('Запись успешно создана');
          pickedNote.setIsSmallPopupOpened(false);
        })
        .catch((err) => {
          alert(
            err.message,
            'Похоже вы ввели неподходищие данные в одно из полей'
          );
        });
    } else if (pickedNote.currentMode == 'edit') {
      api
        .patchSmallNote(result, pickedNote.currentNote._id)
        .then(() => {
          alert('Запись успешно изменена');
          pickedNote.setIsSmallPopupOpened(false);
        })
        .catch((err) => {
          alert(
            err.message,
            'Похоже вы ввели неподходищие данные в одно из полей'
          );
        });
    }
  };
  return (
    <>
      <section className="full-string-popup__wrapper">
        <div className="full-string-popup">
          <button
            onClick={() => {
              pickedNote.setIsSmallPopupOpened(false);
            }}
            className="full-string-popup__close-button"
          ></button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editHandler();
            }}
            className="full-string-popup__form"
          >
            <PopupField
              inputValue={noteNumber}
              inputValueChanger={setNoteNumber}
              inputName={'Номер по порядку'}
              inputFormName={'noteNumber'}
              regexp={/^[0-9]{1,30}$/}
            ></PopupField>
            <PopupField
              inputValue={diagramId}
              inputValueChanger={setDiagramId}
              inputName={'Номер диаграммы'}
              inputFormName={'diagramId'}
              regexp={/^[0-9]{1,30}$/}
            ></PopupField>
            <PopupField
              inputValue={pressEquipDate}
              inputValueChanger={setPressEquipDate}
              inputName={'Дата прессовой посадки на ось'}
              inputFormName={'pressEquipDate'}
              regexp={/^[0-9]{2}[\.]{1}[0-9]{2}[\.]{1}[0-9]{4}$/g}
            ></PopupField>
            <PopupField
              inputValue={pairId}
              inputValueChanger={setPairId}
              inputName={'Индивидуальный номер оси(колесной пары)'}
              inputFormName={'pairId'}
              regexp={/^[0-9]{1,30}$/}
            ></PopupField>
            <PopupField
              inputValue={pairFullMarkLeft}
              inputValueChanger={setPairFullMarkLeft}
              inputName={'Полная маркировка колеса слева'}
              inputFormName={'pairFullMarkLeft'}
              regexp={/^\d{2}-\d{2}-\d{5,6}$/}
            ></PopupField>
            <PopupField
              inputValue={pairFullMarkRight}
              inputValueChanger={setPairFullMarkRight}
              inputName={'Полная маркировка колеса справа'}
              inputFormName={'pairFullMarkRight'}
              regexp={/^\d{2}-\d{2}-\d{5,6}$/}
            ></PopupField>
            <PopupField
              inputValue={hubDiameterLeft}
              inputValueChanger={setHubDiameterLeft}
              inputName={'Диаметр ступицы колеса слева'}
              inputFormName={'hubDiameterLeft'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={hubDiameterRight}
              inputValueChanger={setHubDiameterRight}
              inputName={'Диаметр ступицы колеса справа'}
              inputFormName={'hubDiameterRight'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={tensionLeft}
              inputValueChanger={setTensionLeft}
              inputName={'натягб мм слева'}
              inputFormName={'tensionLeft'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={tensionRight}
              inputValueChanger={setTensionRight}
              inputName={'натягб мм справа'}
              inputFormName={'tensionRight'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={pressurePowerUpLeft}
              inputValueChanger={setPressurePowerUpLeft}
              inputName={'Усилие запрессовки кН (то) слева'}
              inputFormName={'pressurePowerUpLeft'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={pressurePowerUpRight}
              inputValueChanger={setPressurePowerUpRight}
              inputName={'Усилие запрессовки кН (то) справа'}
              inputFormName={'pressurePowerUpRight'}
              regexp={/^\d{1,10}\.\d{1,10}$/}
            ></PopupField>
            <PopupField
              inputValue={distanceBetweenInnerAndSide}
              inputValueChanger={setDistanceBetweenInnerAndSide}
              inputName={
                'Расстояние между внутренними и боковыми гранями ободов колес'
              }
              inputFormName={'distanceBetweenInnerAndSide'}
              regexp={/^\d{1,10}(-\d{1,10})?$/}
            ></PopupField>
            <PopupField
              inputValue={goodOrBad}
              inputValueChanger={setGoodOrBad}
              inputName={'Заключение о годности'}
              inputFormName={'goodOrBad'}
              regexp={/^[01]$/}
            ></PopupField>
            <PopupField
              inputValue={mastersAcception}
              inputValueChanger={setMastersAcception}
              inputName={'Подпись мастера'}
              inputFormName={'mastersAcception'}
              regexp={/^[01]$/}
            ></PopupField>
            <div className="full-string-popup__submit-button-wrapper">
              <button
                disabled={pickedNote.errString.length > 0}
                type="submit"
                className="full-string-popup__submit-button"
              >
                Подтвердить изменения
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SmallJournalStringPopup;
