import React, {useContext, useState} from "react";
import "./FormNote.css";
import {NoteContext} from "../context/NotesContext";

function FormNote() {
  const [noteCreated, setNoteCreated] = useState({title: "", description: ""});
  const {addNote} = useContext(NoteContext);

  const SendNote = (e) => {
    e.preventDefault();
    addNote(noteCreated.title, noteCreated.description);
  };

  return (
    <aside className="aside-notes">
      <form id="formNote" onSubmit={SendNote}>
        <label htmlFor="titleNote" className="margin-form">
          {" "}
          Título
        </label>
        <input
          type="text"
          value={noteCreated.title}
          onChange={(e) =>
            setNoteCreated({...noteCreated, title: e.target.value})
          }
          id="titleNote"
          placeholder="Título"
        />
        <label htmlFor="descriptionNote" className="margin-form">
          {" "}
          Descrição
        </label>
        <input
          type="text"
          value={noteCreated.description}
          onChange={(e) =>
            setNoteCreated({...noteCreated, description: e.target.value})
          }
          id="descriptionNote"
          placeholder="Descrição"
        />
        <button type="submit" id="buttonForm" className="margin-form">
          Salvar Anotação
        </button>
      </form>
    </aside>
  );
}

export default FormNote;
