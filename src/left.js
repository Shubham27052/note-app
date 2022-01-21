import React, { useEffect, useState } from "react";

const Left = ({
  AddNote,
  DeleteNote,
  getActiveNote,
  notes,
  setNotes,
  activeId,
  setActiveId,
}) => {
  let sortedNotes = notes.sort((a, b) => b.isLastModified - a.isLastModified);

  return (
    <div className="left-container">
      <div className="left-heading-container">
        <h1>Note++</h1>
        <button onClick={AddNote}>Add</button>
      </div>
      <div className="left-notesList-container">
        {sortedNotes.map((note) => {
          return (
            <NotesShort
              {...note}
              DeleteNote={DeleteNote}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          );
        })}
      </div>
    </div>
  );
};

const NotesShort = ({
  isid,
  istitle,
  istext,
  isLastModified,
  DeleteNote,
  activeId,
  setActiveId,
}) => {
  return (
    <div
      className={
        isid === activeId
          ? "notes-short-container active"
          : "notes-short-container"
      }
      key={isid}
      onClick={() => {
        setActiveId(isid);
      }}
    >
      <div className="notes-short-title">
        <h4>{istitle}</h4>
        <button
          onClick={() => {
            DeleteNote(isid);
          }}
        >
          Delete
        </button>
      </div>
      <p>{istext.slice(0, 15)}...</p>
      <span>
        Last Modified{" "}
        {new Date(isLastModified).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
};

export default Left;
