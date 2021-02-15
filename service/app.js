const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('../routes/api')

const app = express()

// Connect to the database
// TODO Override the connection to the DB
// DB = ‘mongodb://<USER\>:<PASSWORD\>@ds039950.mlab.com:39950/todo’
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err))

// Since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())

app.use('/api', routes)

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3005, () => {
  console.log('Serve listening on port 3005')
})