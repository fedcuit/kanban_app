import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import alt from './libs/alt'
import storage from './libs/storage'
import persist from './libs/persist'

main();

function main() {
  persist(alt, storage, 'kanban_app')
  const app = document.createElement('div')
  app.id = 'kanban_app'
  document.body.appendChild(app)
  ReactDOM.render(< App />, app)
}
