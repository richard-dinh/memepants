const router = require('express').Router()

router.get('/google', (request, response) => {
    response.json({message: `API: ${process.env.GOOGLE_API_KEY} CX: ${prcoess.env.CX_ID}`})
})

module.exports = router