import React, {PropTypes} from 'react'

const Note = React.createClass({
  render() {
    return (
      <div>
        <b>react-transform-hmr </b>
        is not supported in babel 6 yet!
        <br/>
        So have to use the deprecated react-hot-loader for now.
      </div>
    )
  }
})

export default Note
