import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    if (note.title && note.content) {
      setNotes((prevNotes) => {
        return [
          ...notes,
          {
            title: note.title,
            content: note.content
          }
        ];
      });
    }
  }

  function removeNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={removeNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
