import React, {createContext, useState} from "react";
import {generateRandomUUID} from "../helpers/generateRandomId";
import {mockNotes} from "../mockData/mockNotes";
import {generateAtualDate} from "../helpers/generateAtualDate";

const NoteContext = createContext();

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([...mockNotes]);

  const addNote = (title, description) => {
    setNotes([
      ...notes,
      {id: generateRandomUUID(), description, title, date: generateAtualDate()},
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>
      {children}
    </NoteContext.Provider>
  );
};

export {NoteProvider, NoteContext};
