import React, {PropTypes} from 'react'

class Note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.checkEnter = this.checkEnter.bind(this)
    this.edit = this.edit.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
  }

  render () {
    const isEditing = this.state.isEditing;
    return (isEditing
      ? this.renderEdit()
      : this.renderTask())
  }

  renderEdit () {
    return (<input type="text" ref="task" defaultValue={this.props.task} autoFocus={true} onBlur={this.finishEdit} onKeyPress={this.checkEnter}/>)
  }

  checkEnter (e) {
    if (e.key == 'Enter') {
      this.finishEdit(e)
    }
  }

  finishEdit (e) {
    this.props.onEdit(e.target.value)
    this.setState({isEditing: false})
  }

  renderTask () {
    return (
      <div onClick={this.edit}>{this.props.task}</div>
    )
  }

  edit () {
    this.setState({isEditing: true})
  }
}

export default Note;
