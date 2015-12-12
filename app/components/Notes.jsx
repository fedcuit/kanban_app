import React, {PropTypes} from 'react'
import Note from './Note'

const Notes = React.createClass({
  renderNote(note) {
    return (
      <li className="note" key={`note${note.id}`}>
        <Note task={note.task}
          onEdit={(task) => this.props.onEdit(note.id, task)}
          onDelete={() => this.props.onDelete(note.id)}
          />
      </li>
    )
  },
  render() {
    const notes = this.props.items;
    return (
      <ul className="notes">
        {notes.map(this.renderNote)}
      </ul>
    )
  }
})

export default Notes
