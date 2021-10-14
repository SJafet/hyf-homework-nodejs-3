const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/users/:id', (req, res) => {
    res.send('Hello World!')
  })