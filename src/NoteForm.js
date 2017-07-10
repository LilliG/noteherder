import React from 'react'
import RichTextEditor from 'react-rte'

import './NoteForm.css'

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorValue: RichTextEditor.createEmptyValue(),
        }
    }

    // componentWillRecieveProps = (nextProps) => {
        
    // }

    handleChange = (ev) => {
        const note = {...this.props.currentNote}
        note[ev.target.name] = ev.target.value
        this.props.saveNote(note)
    }

    handleEditorChange = (editorValue) => {
        this.setState({ editorValue })
        const note = {...this.props.currentNote}
        note.body = editorValue.toString('html')
        this.props.saveNote(note)
    }

    render() {
        const {currentNote} = this.props

        return (
            <div className="NoteForm">
                <div className="form-actions">
                    <button 
                    type="button" 
                    onClick={this.props.removeCurrentNote}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
                <form>
                    <p>
                        <input
                        type="text"
                        name="title"
                        placeholder="Title your note"
                        value={currentNote.title}
                        onChange={this.handleChange}
                        />
                    </p>
                    
                    <RichTextEditor 
                        name="body" 
                        value={this.state.editorValue}  
                        onChange={this.handleEditorChange}
                    ></RichTextEditor>
                </form>
            </div>
        )
    }
}

export default NoteForm