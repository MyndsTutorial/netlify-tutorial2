import React from "react";
import {NoteProvider} from "../context/NotesContext";
import AllNotes from "../components/AllNotes";
import FormNote from "../components/FormNote";
import "./NotesPage.css";
function NotesPage() {
  return (
    <NoteProvider>
      <div className="notesPageContainer">
        <FormNote />
        <AllNotes />
      </div>
    </NoteProvider>
  );
}

export default NotesPage;
