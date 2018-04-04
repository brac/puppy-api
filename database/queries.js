// jshint asi:true
const client = require('./client')

const getAll = (res, next) => {
  return client.query(`SELECT * FROM pups ORDER BY id`)
    .then(
      (results) => {
        res.status(200)
        return results.rows
      },
      error => next(error)
    )
}

const getSingle = (id) => {}
const create = (reqBody) => {}
const update = (reqBody) => {}
const deleteRecord = (id) => {}

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  deleteRecord
}