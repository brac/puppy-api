// jshint asi:true

const express = require('express')
const router  = express.Router()
const queries =  require('../database/queries')

router.route('/')
  .get((req, res, next) => {
    queries.getAll(res, next).then(
      results => res.json(results),
      error => res.json(error)
    )
  })

router.route('/:id')
  .get((req, res) => {
    res.json({message: 'I will get a single'})

  })
  .post((req, res) => {
    res.json({message: 'I will post'})

  })
  .put((req, res) => {
    res.json({message: 'I will update'})

  })
  .delete((req, res) => {
    res.json({message: 'I will delete'})

  })

module.exports = router