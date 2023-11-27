import Header from './Header';
import React from 'react';
import BigJournalNote from './BigJournalNote';
import SmallJournalNote from './SmallJournalNote';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
import FullStringPopup from './BigJournalStringPopup';
import SmallJournalStringPopup from './SmallJournalStringPopup';
import { api } from '../utils/api';
function Journals() {
  const [bigJournalNoteList, setBigJournalNoteList] = React.useState([]);
  const [smallJournalNoteList, setSmallJournalNoteList] = React.useState([]);
  const plug = [
    {
      noteNumber: '3109',
      arrivalDate: '01.12.2023',
      soureceName: '',
      type: '',
      pairId: '564359847589',
      assemblyDate: '',
      lastFormationDate: '',
      lastExaminationDate: '',
      wheelDiameterLeft: '',
      wheelDiameterRight: '',
      dateOfDispatchOrReleaseOnBail: '',
      destination: '',
      axisAnteriorPartLeft: '',
      axisAnteriorPartRight: '',
      axisHubPartLeft: '',
      axisHubPartRight: '',
      axisMiddlePartLeft: '',
      axisMiddlePartRight: '',
      wheelRimThicknessLeft: '',
      wheelRimThicknessRight: '',
      wheelRollingLeft: '',
      wheelRollingRight: '',
      wheelDiscThicknessLeft: '',
      wheelDiscThicknessRight: '',
      wheelRidgeThicknessLeft: '',
      wheelRidgeThicknessRight: '',
      rollingCircleDiameterLeft: '',
      rollingCircleDiameterRight: '',
      distanceBetweenInternalEdges: '',
      repairAxisChange: '',
      repairSolidRolledChange: '',
      repairFormedFromOldWheels: '',
      completeInspectionOfRollerAxleBoxesWithTurning: '',
      completeInspectionOfRollerAxleBoxesWithoutTurning: '',
      restorationOfTheRollerAxleJournalThread: '',
      intermediateRevisionOfRollerAxleBoxesWithTurning: '',
      intermediateRevisionOfRollerAxleBoxesWithoutTurning: '',
      otherWorks: '',
      fullInspectionDate: '',
      signatureForDefectsNeckAndSomeOtherThing: '',
      signatureForDefectsHalfHubAxis: '',
      signatureForDefectsInnerRingsOnAxisNeck: '',
      signatureForDefectsMiddleAxisPart: '',
      signatureWheelsetAcceptance: '',
      signatureWheelsetReprofiling: '',
    },
  ];
  const smolPlug = [
    {
      noteNumber: '3109',
      diagramId: '76588475',
      pressEquipDate: '02.12.2023',
      pairId: '57847887858',
      pairFullMarkLeft: '',
      pairFullMarkRight: '',
      hubDiameterLeft: '',
      hubDiameterRight: '',
      tensionLeft: '',
      tensionRight: '',
      pressurePowerUpLeft: '',
      pressurePowerUpRight: '',
      distanceBetweenInnerAndSide: '',
      goodOrBad: '',
      mastersAcception: '',
    },
  ];
  const [currentNote, setCurrentNote] = React.useState(plug);
  const [isBigPopupOpened, setIsBigPopupOpened] = React.useState(false);
  const [isSmallPopupOpened, setIsSmallPopupOpened] = React.useState(false);
  const [currentJournalName, setCurrentJournalName] =
    React.useState('smallJournal');
  React.useEffect(() => {
    Promise.all([api.getAllBJNs(), api.getAllSJNs()]).then(([BJNs, SJNs]) => {
      setBigJournalNoteList(BJNs);
      setSmallJournalNoteList(SJNs);
    });
  }, []);
  return (
    <>
      <PickedNoteContext.Provider
        value={{
          currentNote,
          setCurrentNote,
          isBigPopupOpened,
          setIsBigPopupOpened,
          isSmallPopupOpened,
          setIsSmallPopupOpened,
        }}
      >
        {isBigPopupOpened && <FullStringPopup></FullStringPopup>}
        {isSmallPopupOpened && (
          <SmallJournalStringPopup></SmallJournalStringPopup>
        )}
        <Header></Header>
        <section className="controll-panel">
          <button
            onClick={() => {
              setCurrentJournalName('smallJournal');
            }}
            className="controll-panel__button"
          >
            Журнал поменбше
          </button>
          <button
            onClick={() => {
              setCurrentJournalName('bigJournal');
            }}
            className="controll-panel__button"
          >
            Журнал поболбше
          </button>
        </section>
        <section className="kostyl">
          {currentJournalName == 'bigJournal' && (
            <>
              <section className="big-journal__header">
                Дата поступления / Номер колесной пары
              </section>
              <section className="big-journal">
                {bigJournalNoteList.map((note) => {
                  return (
                    <BigJournalNote
                      key={note.arrivalDate + note.pairId}
                      note={note}
                    ></BigJournalNote>
                  );
                })}
              </section>
            </>
          )}
          {currentJournalName == 'smallJournal' && (
            <>
              <section className="big-journal__header">
                Номер диаграммы / Номер колесной пары
              </section>
              <section className="big-journal">
                {smallJournalNoteList.map((note) => {
                  return (
                    <SmallJournalNote
                      key={note.diagramId + note.pairId}
                      note={note}
                    ></SmallJournalNote>
                  );
                })}
              </section>
            </>
          )}
          <section></section>
        </section>
      </PickedNoteContext.Provider>
    </>
  );
}

export default Journals;
