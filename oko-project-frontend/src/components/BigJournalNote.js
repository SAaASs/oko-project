import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
function BigJournalNote({ note }) {
  const pickedNote = React.useContext(PickedNoteContext);
  return (
    <>
      <section className="big-journal-note">
        <div className="big-journal-note__date">{note.arrivalDate}</div>
        <div className="big-journal-note__id">{note.pairId}</div>
        <button
          onClick={() => {
            pickedNote.setCurrentNote(note);
            pickedNote.setCurrentMode('edit');
            pickedNote.setIsBigPopupOpened(true);
          }}
          className="big-journal-note__expand"
        >
          Посмтреть полностью
        </button>
      </section>
    </>
  );
}

export default BigJournalNote;
