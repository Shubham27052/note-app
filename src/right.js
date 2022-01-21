import React from "react";

const Right = ({ activeNote, updateNote }) => {
  const onEditField = (field, value) => {
    updateNote({
      ...activeNote,
      [field]: value,
      isLastModified: Date.now(),
    });
  };

  return !activeNote ? (
    <h1 className="no-note-heading">Select a note to work on</h1>
  ) : (
    <div className="right-container">
      <div className="right-title-container">
        <input
          placeholder="Title...."
          value={activeNote.istitle}
          onChange={(e) => {
            onEditField("istitle", e.target.value);
          }}
        />
      </div>
      <div className="right-text-container">
        <textarea
          type="text"
          placeholder="Enter your notes here...."
          value={activeNote.istext}
          onChange={(e) => {
            onEditField("istext", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Right;
