import React from 'react'
import Notes from './Notes.jsx'
import NoteStore from '../stores/NoteStore'
import NoteActions from '../actions/NoteActions'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.stateChanged = this.stateChanged.bind(this);
    this.state = NoteStore.getState();
  }
  componentDidMount () {
    NoteStore.listen(this.stateChanged)
  }
  componentWillUnmount () {
    NoteStore.unlisten(this.stateChanged)
  }
  stateChanged (state) {
    this.setState(state)
  }
  addNote () {
    NoteActions.create({task: 'New task'})
  }
  onEdit (id, task) {
    NoteActions.update({id, task})
  }
  onDelete (id) {
    NoteActions.delete(id)
  }
  render () {
    const notes = this.state.notes
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.onEdit} onDelete={this.onDelete}/>
      </div>
    );
  }
}
