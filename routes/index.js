const { Router } = require('express')
const phonesRouter = require('./phonesRouter')

const router = Router()

router.use('/phones', phonesRouter)

router.get('/', (req, res, next) => {
  res.status(501).send('Not Implemented')
})

module.exports = router
