const router = require('express').Router()

router.use('/api', require('./googleRoutes'))

module.exports = router