import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
import PopupField from './PopupField';
function SmallJournalStringPopup() {
  const pickedNote = React.useContext(PickedNoteContext);
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
          <form className="full-string-popup__form">
            <PopupField
              inputValue={diagramId}
              inputValueChanger={setDiagramId}
              inputName={'Номер диаграммы'}
              inputFormName={'diagramId'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pressEquipDate}
              inputValueChanger={setPressEquipDate}
              inputName={'Дата прессовой посадки на ось'}
              inputFormName={'pressEquipDate'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pairId}
              inputValueChanger={setPairId}
              inputName={'Индивидуальный номер оси(колесной пары)'}
              inputFormName={'pairId'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pairFullMarkLeft}
              inputValueChanger={setPairFullMarkLeft}
              inputName={'Полная маркировка колеса слева'}
              inputFormName={'pairFullMarkLeft'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pairFullMarkRight}
              inputValueChanger={setPairFullMarkRight}
              inputName={'Полная маркировка колеса справа'}
              inputFormName={'pairFullMarkRight'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={hubDiameterLeft}
              inputValueChanger={setHubDiameterLeft}
              inputName={'Диаметр ступицы колеса слева'}
              inputFormName={'hubDiameterLeft'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={hubDiameterRight}
              inputValueChanger={setHubDiameterRight}
              inputName={'Диаметр ступицы колеса справа'}
              inputFormName={'hubDiameterRight'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={tensionLeft}
              inputValueChanger={setTensionLeft}
              inputName={'натягб мм слева'}
              inputFormName={'tensionLeft'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={tensionRight}
              inputValueChanger={setTensionRight}
              inputName={'натягб мм справа'}
              inputFormName={'tensionRight'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pressurePowerUpLeft}
              inputValueChanger={setPressurePowerUpLeft}
              inputName={'Усилие запрессовки кН (то) слева'}
              inputFormName={'pressurePowerUpLeft'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={pressurePowerUpRight}
              inputValueChanger={setPressurePowerUpRight}
              inputName={'Усилие запрессовки кН (то) справа'}
              inputFormName={'pressurePowerUpRight'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={distanceBetweenInnerAndSide}
              inputValueChanger={setDistanceBetweenInnerAndSide}
              inputName={
                'Расстояние между внутренними и боковыми гранями ободов колес'
              }
              inputFormName={'distanceBetweenInnerAndSide'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={goodOrBad}
              inputValueChanger={setGoodOrBad}
              inputName={'Заключение о годности'}
              inputFormName={'goodOrBad'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={mastersAcception}
              inputValueChanger={setMastersAcception}
              inputName={'Подпись мастера'}
              inputFormName={'mastersAcception'}
              regexp={''}
            ></PopupField>
            <div className="full-string-popup__submit-button-wrapper">
              <button
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
