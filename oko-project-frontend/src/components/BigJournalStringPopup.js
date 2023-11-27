import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
import PopupField from './PopupField';
import PopupFieldWrapper from './PopupFieldWrapper';
function FullStringPopup() {
  const pickedNote = React.useContext(PickedNoteContext);
  console.log(pickedNote.currentNote);
  const [noteNumber, setNoteNumber] = React.useState(
    pickedNote.currentNote.noteNumber
  );
  const [arrivalDate, setArrivalDate] = React.useState(
    pickedNote.currentNote.arrivalDate
  );
  const [soureceName, setSoureceName] = React.useState(
    pickedNote.currentNote.soureceName
  );
  const [type, setType] = React.useState(pickedNote.currentNote.type);
  const [pairId, setPairId] = React.useState(pickedNote.currentNote.pairId);
  const [assemblyDate, setAssemblyDate] = React.useState(
    pickedNote.currentNote.assemblyDate
  );
  const [lastFormationDate, setLastFormationDate] = React.useState(
    pickedNote.currentNote.lastFormationDate
  );
  const [lastExaminationDate, setLastExaminationDate] = React.useState(
    pickedNote.currentNote.lastExaminationDate
  );
  const [wheelDiameterLeft, setWheelDiameterLeft] = React.useState(
    pickedNote.currentNote.wheelDiameterLeft
  );
  const [wheelDiameterRight, setWheelDiameterRight] = React.useState(
    pickedNote.currentNote.wheelDiameterRight
  );
  const [dateOfDispatchOrReleaseOnBail, setDateOfDispatchOrReleaseOnBail] =
    React.useState(pickedNote.currentNote.dateOfDispatchOrReleaseOnBail);
  const [destination, setDestination] = React.useState(
    pickedNote.currentNote.destination
  );
  const [axisAnteriorPartLeft, setAxisAnteriorPartLeft] = React.useState(
    pickedNote.currentNote.axisAnteriorPartLeft
  );
  const [axisAnteriorPartRight, setAxisAnteriorPartRight] = React.useState(
    pickedNote.currentNote.axisAnteriorPartRight
  );
  const [axisHubPartLeft, setAxisHubPartLeft] = React.useState(
    pickedNote.currentNote.axisHubPartLeft
  );
  const [axisHubPartRight, setAxisHubPartRight] = React.useState(
    pickedNote.currentNote.axisHubPartRight
  );
  const [axisMiddlePartLeft, setAxisMiddlePartLeft] = React.useState(
    pickedNote.currentNote.axisMiddlePartLeft
  );
  const [axisMiddlePartRight, setAxisMiddlePartRight] = React.useState(
    pickedNote.currentNote.axisMiddlePartRight
  );
  const [wheelRimThicknessLeft, setWheelRimThicknessLeft] = React.useState(
    pickedNote.currentNote.wheelRimThicknessLeft
  );
  const [wheelRimThicknessRight, setWheelRimThicknessRight] = React.useState(
    pickedNote.currentNote.wheelRimThicknessRight
  );
  const [wheelRollingLeft, setWheelRollingLeft] = React.useState(
    pickedNote.currentNote.wheelRollingLeft
  );
  const [wheelRollingRight, setWheelRollingRight] = React.useState(
    pickedNote.currentNote.wheelRollingRight
  );
  const [wheelDiscThicknessLeft, setWheelDiscThicknessLeft] = React.useState(
    pickedNote.currentNote.wheelDiscThicknessLeft
  );
  const [wheelDiscThicknessRight, setWheelDiscThicknessRight] = React.useState(
    pickedNote.currentNote.wheelDiscThicknessRight
  );
  const [wheelRidgeThicknessLeft, setWheelRidgeThicknessLeft] = React.useState(
    pickedNote.currentNote.wheelRidgeThicknessLeft
  );
  const [wheelRidgeThicknessRight, setWheelRidgeThicknessRight] =
    React.useState(pickedNote.currentNote.wheelRidgeThicknessRight);
  const [rollingCircleDiameterLeft, setRollingCircleDiameterLeft] =
    React.useState(pickedNote.currentNote.rollingCircleDiameterLeft);
  const [rollingCircleDiameterRight, setRollingCircleDiameterRight] =
    React.useState(pickedNote.currentNote.rollingCircleDiameterRight);
  const [distanceBetweenInternalEdges, setDistanceBetweenInternalEdges] =
    React.useState(pickedNote.currentNote.distanceBetweenInternalEdges);
  const [repairAxisChange, setRepairAxisChange] = React.useState(
    pickedNote.currentNote.repairAxisChange
  );
  const [repairSolidRolledChange, setRepairSolidRolledChange] = React.useState(
    pickedNote.currentNote.repairSolidRolledChange
  );
  const [repairFormedFromOldWheels, setRepairFormedFromOldWheels] =
    React.useState(pickedNote.currentNote.repairFormedFromOldWheels);
  const [
    completeInspectionOfRollerAxleBoxesWithTurning,
    setCompleteInspectionOfRollerAxleBoxesWithTurning,
  ] = React.useState(
    pickedNote.currentNote.completeInspectionOfRollerAxleBoxesWithTurning
  );
  const [
    completeInspectionOfRollerAxleBoxesWithoutTurning,
    setCompleteInspectionOfRollerAxleBoxesWithoutTurning,
  ] = React.useState(
    pickedNote.currentNote.completeInspectionOfRollerAxleBoxesWithoutTurning
  );
  const [
    restorationOfTheRollerAxleJournalThread,
    setRestorationOfTheRollerAxleJournalThread,
  ] = React.useState(
    pickedNote.currentNote.restorationOfTheRollerAxleJournalThread
  );
  const [
    intermediateRevisionOfRollerAxleBoxesWithTurning,
    setIntermediateRevisionOfRollerAxleBoxesWithTurning,
  ] = React.useState(
    pickedNote.currentNote.intermediateRevisionOfRollerAxleBoxesWithTurning
  );
  const [
    intermediateRevisionOfRollerAxleBoxesWithoutTurning,
    setIntermediateRevisionOfRollerAxleBoxesWithoutTurning,
  ] = React.useState(
    pickedNote.currentNote.intermediateRevisionOfRollerAxleBoxesWithoutTurning
  );
  const [otherWorks, setOtherWorks] = React.useState(
    pickedNote.currentNote.otherWorks
  );
  const [fullInspectionDate, setFullInspectionDate] = React.useState(
    pickedNote.currentNote.fullInspectionDate
  );
  const [
    signatureForDefectsNeckAndSomeOtherThing,
    setSignatureForDefectsNeckAndSomeOtherThing,
  ] = React.useState(
    pickedNote.currentNote.signatureForDefectsNeckAndSomeOtherThing
  );
  const [signatureForDefectsHalfHubAxis, setSignatureForDefectsHalfHubAxis] =
    React.useState(pickedNote.currentNote.signatureForDefectsHalfHubAxis);
  const [
    signatureForDefectsInnerRingsOnAxisNeck,
    setSignatureForDefectsInnerRingsOnAxisNeck,
  ] = React.useState(
    pickedNote.currentNote.signatureForDefectsInnerRingsOnAxisNeck
  );
  const [
    signatureForDefectsMiddleAxisPart,
    setSignatureForDefectsMiddleAxisPart,
  ] = React.useState(pickedNote.currentNote.signatureForDefectsMiddleAxisPart);
  const [signatureWheelsetAcceptance, setSignatureWheelsetAcceptance] =
    React.useState(pickedNote.currentNote.signatureWheelsetAcceptance);
  const [signatureWheelsetReprofiling, setSignatureWheelsetReprofiling] =
    React.useState(pickedNote.currentNote.signatureWheelsetReprofiling);
  React.useEffect(() => {
    setNoteNumber(pickedNote.currentNote.noteNumber);
    setArrivalDate(pickedNote.currentNote.arrivalDate);
    setSoureceName(pickedNote.currentNote.soureceName);
    setType(pickedNote.currentNote.type);
    setPairId(pickedNote.currentNote.pairId);
    setAssemblyDate(pickedNote.currentNote.assemblyDate);
    setLastFormationDate(pickedNote.currentNote.lastFormationDate);
    setLastExaminationDate(pickedNote.currentNote.lastExaminationDate);
    setWheelDiameterLeft(pickedNote.currentNote.wheelDiameterLeft);
    setWheelDiameterRight(pickedNote.currentNote.wheelDiameterRight);
    setDateOfDispatchOrReleaseOnBail(
      pickedNote.currentNote.dateOfDispatchOrReleaseOnBail
    );
    setDestination(pickedNote.currentNote.destination);
    setAxisAnteriorPartLeft(pickedNote.currentNote.axisAnteriorPartLeft);
    setAxisAnteriorPartRight(pickedNote.currentNote.axisAnteriorPartRight);
    setAxisHubPartLeft(pickedNote.currentNote.axisHubPartLeft);
    setAxisHubPartRight(pickedNote.currentNote.axisHubPartRight);
    setAxisMiddlePartLeft(pickedNote.currentNote.axisMiddlePartLeft);
    setAxisMiddlePartRight(pickedNote.currentNote.axisMiddlePartRight);
    setWheelRimThicknessLeft(pickedNote.currentNote.wheelRimThicknessLeft);
    setWheelRimThicknessRight(pickedNote.currentNote.wheelRimThicknessRight);
    setWheelRollingLeft(pickedNote.currentNote.wheelRollingLeft);
    setWheelRollingRight(pickedNote.currentNote.wheelRollingRight);
    setWheelDiscThicknessLeft(pickedNote.currentNote.wheelDiscThicknessLeft);
    setWheelDiscThicknessRight(pickedNote.currentNote.wheelDiscThicknessRight);
    setWheelRidgeThicknessLeft(pickedNote.currentNote.wheelRidgeThicknessLeft);
    setWheelRidgeThicknessRight(
      pickedNote.currentNote.wheelRidgeThicknessRight
    );
    setRollingCircleDiameterLeft(
      pickedNote.currentNote.rollingCircleDiameterLeft
    );
    setRollingCircleDiameterRight(
      pickedNote.currentNote.rollingCircleDiameterRight
    );
    setDistanceBetweenInternalEdges(
      pickedNote.currentNote.distanceBetweenInternalEdges
    );
    setRepairAxisChange(pickedNote.currentNote.repairAxisChange);
    setRepairSolidRolledChange(pickedNote.currentNote.repairSolidRolledChange);
    setRepairFormedFromOldWheels(
      pickedNote.currentNote.repairFormedFromOldWheels
    );
    setCompleteInspectionOfRollerAxleBoxesWithTurning(
      pickedNote.currentNote.completeInspectionOfRollerAxleBoxesWithTurning
    );
    setCompleteInspectionOfRollerAxleBoxesWithoutTurning(
      pickedNote.currentNote.completeInspectionOfRollerAxleBoxesWithoutTurning
    );
    setRestorationOfTheRollerAxleJournalThread(
      pickedNote.currentNote.restorationOfTheRollerAxleJournalThread
    );
    setIntermediateRevisionOfRollerAxleBoxesWithTurning(
      pickedNote.currentNote.intermediateRevisionOfRollerAxleBoxesWithTurning
    );
    setIntermediateRevisionOfRollerAxleBoxesWithoutTurning(
      pickedNote.currentNote.intermediateRevisionOfRollerAxleBoxesWithoutTurning
    );
    setOtherWorks(pickedNote.currentNote.otherWorks);
    setFullInspectionDate(pickedNote.currentNote.fullInspectionDate);
    setSignatureForDefectsNeckAndSomeOtherThing(
      pickedNote.currentNote.signatureForDefectsNeckAndSomeOtherThing
    );
    setSignatureForDefectsHalfHubAxis(
      pickedNote.currentNote.signatureForDefectsHalfHubAxis
    );
    setSignatureForDefectsInnerRingsOnAxisNeck(
      pickedNote.currentNote.signatureForDefectsInnerRingsOnAxisNeck
    );
    setSignatureForDefectsMiddleAxisPart(
      pickedNote.currentNote.signatureForDefectsMiddleAxisPart
    );
    setSignatureWheelsetAcceptance(
      pickedNote.currentNote.signatureWheelsetAcceptance
    );
    setSignatureWheelsetReprofiling(
      pickedNote.currentNote.signatureWheelsetReprofiling
    );
  }, []);
  const editHandler = () => {
    const result = {
      noteNumber,
      arrivalDate,
      soureceName,
      type,
      pairId,
      assemblyDate,
      lastFormationDate,
      lastExaminationDate,
      wheelDiameterLeft,
      wheelDiameterRight,
      dateOfDispatchOrReleaseOnBail,
      destination,
      axisAnteriorPartLeft,
      axisAnteriorPartRight,
      axisHubPartLeft,
      axisHubPartRight,
      axisMiddlePartLeft,
      axisMiddlePartRight,
      wheelRimThicknessLeft,
      wheelRimThicknessRight,
      wheelRollingLeft,
      wheelRollingRight,
      wheelDiscThicknessLeft,
      wheelDiscThicknessRight,
      wheelRidgeThicknessLeft,
      wheelRidgeThicknessRight,
      rollingCircleDiameterLeft,
      rollingCircleDiameterRight,
      distanceBetweenInternalEdges,
      repairAxisChange,
      repairSolidRolledChange,
      repairFormedFromOldWheels,
      completeInspectionOfRollerAxleBoxesWithTurning,
      completeInspectionOfRollerAxleBoxesWithoutTurning,
      restorationOfTheRollerAxleJournalThread,
      intermediateRevisionOfRollerAxleBoxesWithTurning,
      intermediateRevisionOfRollerAxleBoxesWithoutTurning,
      otherWorks,
      fullInspectionDate,
      signatureForDefectsNeckAndSomeOtherThing,
      signatureWheelsetAcceptance,
      signatureWheelsetReprofiling,
    };
  };

  return (
    <>
      <section className="full-string-popup__wrapper">
        <div className="full-string-popup">
          <button
            onClick={() => {
              pickedNote.setIsBigPopupOpened(false);
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
            <PopupFieldWrapper categoryName={'Приход'}>
              <PopupField
                inputValue={noteNumber}
                inputValueChanger={setNoteNumber}
                inputName={'Номер по порядку'}
                inputFormName={'noteNumber'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={arrivalDate}
                inputValueChanger={setArrivalDate}
                inputName={'Дата послупления'}
                inputFormName={'arrivalDate'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={soureceName}
                inputValueChanger={setSoureceName}
                inputName={
                  'Наименовае завода или пункта откуда поступила колесная пара, или номер вагона из пол которого она выкачена'
                }
                inputFormName={'soureceName'}
                regexp={''}
              ></PopupField>
              <PopupFieldWrapper categoryName={'Харрактеристика колесной пары'}>
                <PopupField
                  inputValue={type}
                  inputValueChanger={setType}
                  inputName={'Тип колесной пары'}
                  inputFormName={'type'}
                  regexp={''}
                ></PopupField>
                <PopupField
                  inputValue={pairId}
                  inputValueChanger={setPairId}
                  inputName={'Номер колесной пары'}
                  inputFormName={'pairId'}
                  regexp={''}
                ></PopupField>
                <PopupFieldWrapper categoryName={'Дата и пункт'}>
                  <PopupField
                    inputValue={assemblyDate}
                    inputValueChanger={setAssemblyDate}
                    inputName={'Изготовления оси'}
                    inputFormName={'assemblyDate'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={lastFormationDate}
                    inputValueChanger={setLastFormationDate}
                    inputName={'Последнего формирования'}
                    inputFormName={'lastFormationDate'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={lastExaminationDate}
                    inputValueChanger={setLastExaminationDate}
                    inputName={
                      'Последнего полного освидетельствования колесной пары и монтажа букс для роликовых колесных пар'
                    }
                    inputFormName={'lastExaminationDate'}
                    regexp={''}
                  ></PopupField>
                </PopupFieldWrapper>
                <PopupField
                  inputValue={wheelDiameterLeft}
                  inputValueChanger={setWheelDiameterLeft}
                  inputName={'Диаметр по кругу катания колеса-левое'}
                  inputFormName={'wheelDiameterLeft'}
                  regexp={''}
                ></PopupField>
                <PopupField
                  inputValue={wheelDiameterRight}
                  inputValueChanger={setWheelDiameterRight}
                  inputName={'Диаметр по кругу катания колеса-правое'}
                  inputFormName={'wheelDiameterRight'}
                  regexp={''}
                ></PopupField>
              </PopupFieldWrapper>
            </PopupFieldWrapper>
            <PopupFieldWrapper categoryName={'Расход'}>
              <PopupField
                inputValue={dateOfDispatchOrReleaseOnBail}
                inputValueChanger={setDateOfDispatchOrReleaseOnBail}
                inputName={'Дата отправки или подкатки под вагон'}
                inputFormName={'dateOfDispatchOrReleaseOnBail'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={destination}
                inputValueChanger={setDestination}
                inputName={
                  'Наименование завода или пункта куда направлена колесная пара или номер вагона под который она подкачена'
                }
                inputFormName={'destination'}
                regexp={''}
              ></PopupField>
              <PopupFieldWrapper categoryName={'Размер колесной пары(мм)'}>
                <PopupFieldWrapper categoryName={'Диаметр оси'}>
                  <PopupField
                    inputValue={axisAnteriorPartLeft}
                    inputValueChanger={setAxisAnteriorPartLeft}
                    inputName={'Диаметр оси в предступичной части-левый'}
                    inputFormName={'axisAnteriorPartLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={axisAnteriorPartRight}
                    inputValueChanger={setAxisAnteriorPartRight}
                    inputName={'Диаметр оси в предступичной части-правый'}
                    inputFormName={'axisAnteriorPartRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={axisHubPartLeft}
                    inputValueChanger={setAxisHubPartLeft}
                    inputName={'Диаметр оси в подступичной части-левый'}
                    inputFormName={'axisHubPartLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={axisHubPartRight}
                    inputValueChanger={setAxisHubPartRight}
                    inputName={'Диаметр оси в подступичной части-правый'}
                    inputFormName={'axisHubPartRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={axisMiddlePartLeft}
                    inputValueChanger={setAxisMiddlePartLeft}
                    inputName={'Посередине-левый'}
                    inputFormName={'axisMiddlePartLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={axisMiddlePartRight}
                    inputValueChanger={setAxisMiddlePartRight}
                    inputName={'Посередине-правый'}
                    inputFormName={'axisMiddlePartRight'}
                    regexp={''}
                  ></PopupField>
                </PopupFieldWrapper>
                <PopupFieldWrapper categoryName={'Колеса'}>
                  <PopupField
                    inputValue={wheelRimThicknessLeft}
                    inputValueChanger={setWheelRimThicknessLeft}
                    inputName={'Толщина обода-левый'}
                    inputFormName={'wheelRimThicknessLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelRimThicknessRight}
                    inputValueChanger={setWheelRimThicknessRight}
                    inputName={'Толщина обода-правый'}
                    inputFormName={'wheelRimThicknessRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelRollingLeft}
                    inputValueChanger={setWheelRollingLeft}
                    inputName={'Прокат-левый'}
                    inputFormName={'wheelRollingLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelRollingRight}
                    inputValueChanger={setWheelRollingRight}
                    inputName={'Прокат-левый'}
                    inputFormName={'wheelRollingRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelDiscThicknessLeft}
                    inputValueChanger={setWheelDiscThicknessLeft}
                    inputName={'Толщина диска-левый'}
                    inputFormName={'wheelDiscThicknessLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelDiscThicknessRight}
                    inputValueChanger={setWheelDiscThicknessRight}
                    inputName={'Толщина диска-правый'}
                    inputFormName={'wheelDiscThicknessRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelRidgeThicknessLeft}
                    inputValueChanger={setWheelRidgeThicknessLeft}
                    inputName={'Толщина гребня-левый'}
                    inputFormName={'wheelRidgeThicknessLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={wheelRimThicknessRight}
                    inputValueChanger={setWheelRidgeThicknessRight}
                    inputName={'Толщина гребня-правый'}
                    inputFormName={'wheelRidgeThicknessRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={rollingCircleDiameterLeft}
                    inputValueChanger={setRollingCircleDiameterLeft}
                    inputName={'Диаметр по кругу катания-левый'}
                    inputFormName={'rollingCircleDiameterLeft'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={rollingCircleDiameterRight}
                    inputValueChanger={setRollingCircleDiameterRight}
                    inputName={'Диаметр по кругу катания-правый'}
                    inputFormName={'rollingCircleDiameterRight'}
                    regexp={''}
                  ></PopupField>
                  <PopupField
                    inputValue={distanceBetweenInternalEdges}
                    inputValueChanger={setDistanceBetweenInternalEdges}
                    inputName={'Расстояние между внутренними гранями'}
                    inputFormName={'distanceBetweenInternalEdges'}
                    regexp={''}
                  ></PopupField>
                </PopupFieldWrapper>
              </PopupFieldWrapper>
            </PopupFieldWrapper>
            <PopupFieldWrapper categoryName={'Выполненный ремонт'}>
              <PopupField
                inputValue={repairAxisChange}
                inputValueChanger={setRepairAxisChange}
                inputName={'Смена оси'}
                inputFormName={'repairAxisChange'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={repairSolidRolledChange}
                inputValueChanger={setRepairSolidRolledChange}
                inputName={'Смена цельнокатанных колес'}
                inputFormName={'repairSolidRolledChange'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={repairFormedFromOldWheels}
                inputValueChanger={setRepairFormedFromOldWheels}
                inputName={'Смена из старо-годных колес'}
                inputFormName={'repairFormedFromOldWheels'}
                regexp={''}
              ></PopupField>
              <PopupFieldWrapper categoryName={'Полная ревизия роликовых букс'}>
                <PopupField
                  inputValue={completeInspectionOfRollerAxleBoxesWithTurning}
                  inputValueChanger={
                    setCompleteInspectionOfRollerAxleBoxesWithTurning
                  }
                  inputName={'С обточкой поверхности катания'}
                  inputFormName={
                    'completeInspectionOfRollerAxleBoxesWithTurning'
                  }
                  regexp={''}
                ></PopupField>
                <PopupField
                  inputValue={completeInspectionOfRollerAxleBoxesWithoutTurning}
                  inputValueChanger={
                    setCompleteInspectionOfRollerAxleBoxesWithoutTurning
                  }
                  inputName={'Без обточки поверхности катания'}
                  inputFormName={
                    'completeInspectionOfRollerAxleBoxesWithoutTurning'
                  }
                  regexp={''}
                ></PopupField>
              </PopupFieldWrapper>
              <PopupField
                inputValue={restorationOfTheRollerAxleJournalThread}
                inputValueChanger={setRestorationOfTheRollerAxleJournalThread}
                inputName={'Восстановление резьбы шейки роликовой оси'}
                inputFormName={'restorationOfTheRollerAxleJournalThread'}
                regexp={''}
              ></PopupField>
              <PopupFieldWrapper
                categoryName={'Промежуточная ревизия роликовых букс'}
              >
                <PopupField
                  inputValue={intermediateRevisionOfRollerAxleBoxesWithTurning}
                  inputValueChanger={
                    setIntermediateRevisionOfRollerAxleBoxesWithTurning
                  }
                  inputName={'С обточкой поверхности катания'}
                  inputFormName={
                    'intermediateRevisionOfRollerAxleBoxesWithTurning'
                  }
                  regexp={''}
                ></PopupField>
                <PopupField
                  inputValue={
                    intermediateRevisionOfRollerAxleBoxesWithoutTurning
                  }
                  inputValueChanger={
                    setIntermediateRevisionOfRollerAxleBoxesWithoutTurning
                  }
                  inputName={'Без обточки поверхности катания'}
                  inputFormName={
                    'intermediateRevisionOfRollerAxleBoxesWithoutTurning'
                  }
                  regexp={''}
                ></PopupField>
              </PopupFieldWrapper>
              <PopupField
                inputValue={otherWorks}
                inputValueChanger={setOtherWorks}
                inputName={'Прочие работы'}
                inputFormName={'otherWorks'}
                regexp={''}
              ></PopupField>
            </PopupFieldWrapper>
            <PopupField
              inputValue={fullInspectionDate}
              inputValueChanger={setFullInspectionDate}
              inputName={'Дата полного освидетельствования колесной пары'}
              inputFormName={'fullInspectionDate'}
              regexp={''}
            ></PopupField>
            <PopupFieldWrapper
              categoryName={'Подпись лица проводившего проверку дефектоскопом'}
            >
              <PopupField
                inputValue={signatureForDefectsNeckAndSomeOtherThing}
                inputValueChanger={setSignatureForDefectsNeckAndSomeOtherThing}
                inputName={'Шейки и предюлступичной части оси'}
                inputFormName={'signatureForDefectsNeckAndSomeOtherThing'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={signatureForDefectsHalfHubAxis}
                inputValueChanger={setSignatureForDefectsHalfHubAxis}
                inputName={'Подступичной части оси'}
                inputFormName={'signatureForDefectsHalfHubAxis'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={signatureForDefectsInnerRingsOnAxisNeck}
                inputValueChanger={setSignatureForDefectsInnerRingsOnAxisNeck}
                inputName={'Внутренних колец на шейке оси'}
                inputFormName={'signatureForDefectsInnerRingsOnAxisNeck'}
                regexp={''}
              ></PopupField>
              <PopupField
                inputValue={signatureForDefectsMiddleAxisPart}
                inputValueChanger={setSignatureForDefectsMiddleAxisPart}
                inputName={'Средней части оси'}
                inputFormName={'signatureForDefectsMiddleAxisPart'}
                regexp={''}
              ></PopupField>
            </PopupFieldWrapper>
            <PopupField
              inputValue={signatureWheelsetAcceptance}
              inputValueChanger={setSignatureWheelsetAcceptance}
              inputName={'Подпись лица проводившего приемку колесной пары'}
              inputFormName={'signatureWheelsetAcceptance'}
              regexp={''}
            ></PopupField>
            <PopupField
              inputValue={signatureWheelsetReprofiling}
              inputValueChanger={setSignatureWheelsetReprofiling}
              inputName={'Подпись лица проводившего подкатку колесной пары'}
              inputFormName={'signatureWheelsetReprofiling'}
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

export default FullStringPopup;
