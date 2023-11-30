import React, {useContext, useState} from "react";
import {NoteContext} from "../context/NotesContext";
import Note from "./Note";
import "./AllNotes.css";
import {mockNotes} from "../mockData/mockNotes";
function AllNotes() {
  const {notes} = useContext(NoteContext);

  return (
    <div className="AllNotes">
      {notes.map((n) => (
        <Note key={n.id} {...n} />
      ))}
    </div>
  );
}

export default AllNotes;
