const { Router } = require('express')

const phonesRouter = Router()

phonesRouter
  .route('/')
  .post(() => {})
  .get(() => {})

phonesRouter
  .route('/:phoneId')
  .get(() => {})
  .patch(() => {})
  .delete(() => {})

module.exports = phonesRouter
