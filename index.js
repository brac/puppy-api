// jshint asi:true

const express = require('express')
const app = express()
const db = require('./database/queries')
const bodyParser = require('body-parser')
const puppyRoutes = require('./routes/puppies')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/puppies', puppyRoutes)

app.use('/', (req,res)=> {
  res.json({message: 'Welcome!'})
})

app.use((err, req, res, next) => {
  console.log('Found an error!')
  res.status(err.code || 500)
  .json({
    status:'error',
    message: err
  })
})

app.listen(3000, () => {
  console.log('App is listening on port 3000!')
})