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
  const emptyBJN = {
    noteNumber: '',
    arrivalDate: '',
    soureceName: '',
    type: '',
    pairId: '',
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
  };

  const emptySJN = {
    noteNumber: '',
    diagramId: '',
    pressEquipDate: '',
    pairId: '',
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
  };

  const [currentNote, setCurrentNote] = React.useState();
  const [currentMode, setCurrentMode] = React.useState('edit');
  const [isBigPopupOpened, setIsBigPopupOpened] = React.useState(false);
  const [isSmallPopupOpened, setIsSmallPopupOpened] = React.useState(false);
  const [currentJournalName, setCurrentJournalName] =
    React.useState('smallJournal');
  const [errString, setErrString] = React.useState('');
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
          currentMode,
          setCurrentMode,
          errString,
          setErrString,
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
            className={
              currentJournalName == 'smallJournal'
                ? 'controll-panel__button controll-panel__button-picked'
                : 'controll-panel__button'
            }
          >
            Журнал ВУ-51
          </button>
          <button
            onClick={() => {
              setCurrentJournalName('bigJournal');
            }}
            className={
              currentJournalName == 'bigJournal'
                ? 'controll-panel__button controll-panel__button-picked'
                : 'controll-panel__button'
            }
          >
            Журнал ВУ-53
          </button>
        </section>
        <section className="kostyl">
          {currentJournalName == 'bigJournal' && (
            <>
              <button
                onClick={() => {
                  setCurrentMode('create');
                  setCurrentNote(emptyBJN);
                  setIsBigPopupOpened(true);
                }}
                className="big-journal__create-button"
              >
                Создать запись в журнале ВУ-53
              </button>
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
              <button
                onClick={() => {
                  setCurrentMode('create');
                  setCurrentNote(emptySJN);
                  setIsSmallPopupOpened(true);
                }}
                className="big-journal__create-button"
              >
                Создать запись в журнале ВУ-51
              </button>
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
