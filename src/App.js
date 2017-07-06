import React, { Component } from 'react'

import './App.css'
import Main from "./Main"

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-4': {
          id: 'note-4',
          title: 'From App State',
          body: 'The fanciest!'
        },
        'note-5': {
          id: 'note-5',
          title: 'Another one',
          body: 'Also very fancy'
        },
      },
      currentNote: this.blank
    }
  }

  blank = {
          id: null,
          title: '',
          body: ''
          }

  handleNoteClick = (note) => {
      this.setState({ currentNote: note })
    }

  render() {
    return (
      <div className="App" >
        <Main notes={this.state.notes} currentNote={this.state.currentNote} handleNoteClick={this.handleNoteClick} />
      </div>
    )
  }
}

export default App;