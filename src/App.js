import React, { useEffect, useState } from "react";
import Left from "./left.js";
import Right from "./right.js";
import uuid from "react-uuid";
const App = () => {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeId, setActiveId] = useState(false);

  const AddNote = () => {
    const newNote = {
      isid: uuid(),
      istitle: "Untitled Note",
      istext: "Add any text...",
      isLastModified: Date.now(),
    };
    setNotes([...notes, newNote]);
  };
  const DeleteNote = (idToDelete) => {
    console.log(notes[0].isid);
    console.log(idToDelete);
    setNotes(notes.filter((note) => note.isid !== idToDelete));
  };
  const getActiveNote = () => {
    return notes.find((note) => note.isid === activeId);
  };
  const updateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.isid === updatedNote.isid) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app-container">
      <Left
        AddNote={AddNote}
        DeleteNote={DeleteNote}
        getActiveNote={getActiveNote}
        notes={notes}
        setNote={setNotes}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <Right activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
};

export default App;
