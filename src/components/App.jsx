import React from "react";
import notes from "../notes"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  )
}

export default App;