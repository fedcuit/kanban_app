var component = require('./component')
require('./main')

var app = document.createElement('div')

document.body.appendChild(app)
app.appendChild(component())
