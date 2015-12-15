import uuid from 'node-uuid'
import alt from '../libs/alt'
import NoteActions from '../actions/NoteActions'
import _ from 'underscore'

class NoteStore {
  constructor() {
    this.bindActions(NoteActions)
    this.notes = [{
      id: uuid.v4(),
      task: 'Learn Webpack'
    }, {
      id: uuid.v4(),
      task: 'Learn React'
    }, {
      id: uuid.v4(),
      task: 'Do laundry'
    }]
  }

  create(note) {
    const notes = this.notes;
    note.id = uuid.v4()
    this.setState({
      notes: notes.concat(note)
    })
  }

  update({
    id, task
  }) {
    let notes = this.notes;
    const index = this.findNote(id)
    if (index < 0) return

    notes[index].task = task;

    this.setState({
      notes
    })
  }

  findNote(id) {
    return _(this.notes).findIndex({
      id
    })
  }

  delete(id) {
    let notes = this.notes
    notes = _(notes).reject({
      id
    })
    this.setState({
      notes
    })
  }
}

export default alt.createStore(NoteStore, 'NoteStore')
