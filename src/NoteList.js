import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes }) => {
    let noteArray = Object.values(notes)

    noteArray.sort(function (a, b) {
        return b.updatedAt - a.updatedAt
    })

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {noteArray.map(note => (
                <Note 
                    key={note.id}
                    note={notes[note.id]}
                 />
            ))}
          </ul>
        </div>
    )
}

export default NoteList