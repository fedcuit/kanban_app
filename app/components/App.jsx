import uuid from 'node-uuid'
import React from 'react'
import Notes from './Notes.jsx'
import _ from 'underscore'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        }, {
          id: uuid.v4(),
          task: 'Learn React'
        }, {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
    this.onEdit = this.onEdit.bind(this)
  }
  render () {
    const notes = this.state.notes
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.onEdit}/>
      </div>
    );
  }
  
  onEdit(id, task) {
    let notes = this.state.notes;
    const index = _(notes).findIndex(note => note.id == id)
    if (index >= 0) {
      notes[index].task = task
      this.setState({notes})
    } else {
      console.log(`Task with id ${id} can not be found`);
    }
  }
}
