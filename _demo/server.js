const express = require('express')

const app = express()

app.use(express.static('_demo/client'))

app.listen(3022, () => (
  console.log('app run at: ', 3022)
))
