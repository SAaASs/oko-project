import React from 'react';
import { PickedNoteContext } from '../contexts/PickedNoteContext';
function SmallJournalNote({ note }) {
  const pickedNote = React.useContext(PickedNoteContext);
  console.log(note);
  return (
    <>
      <section className="big-journal-note">
        <div className="big-journal-note__date">{note.diagramId}</div>
        <div className="big-journal-note__id">{note.pairId}</div>
        <button
          onClick={() => {
            pickedNote.setCurrentNote(note);
            pickedNote.setIsSmallPopupOpened(true);
          }}
          className="big-journal-note__expand"
        >
          Посмтреть полностью
        </button>
      </section>
    </>
  );
}

export default SmallJournalNote;
