const router = require('express').Router()

const {google} = require('googleapis')


router.get('/google', (request, response) => {
    // response.json({message: `API: ${process.env.GOOGLE_API_KEY} CX: ${process.env.CX_ID}`})

    let customsearch = google.customsearch('v1')

    customsearch.cse.list({
        auth: process.env.GOOGLE_API_KEY,
        cx: process.env.CX_ID,
        q: 'spongebob meme',
        searchType: 'image',
        // filetype filter (ommit if want all image types)
        // fileType: ''
    })
    .then(({data}) => {
        response.json(data)
    })
    .catch(err => {
        response.status(400).send(err)
    })
})

module.exports = router