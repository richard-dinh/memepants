const router = require('express').Router()

const {google} = require('googleapis')


router.get("/google/:q?/:fileType?", (request, response) => {
  // get params. Set defaults if nothing passed in
  console.log(request.query)
  let q = request.query.q
    ? request.query.q + " spongebob meme"
    : "spongebob memes"
  let fileType = request.query.fileType || ""

  console.log(`q: ${q}, fileType: ${fileType}`)
  let customsearch = google.customsearch("v1")

  customsearch.cse
    .list({
      auth: process.env.GOOGLE_API_KEY,
      cx: process.env.CX_ID,
      q,
      searchType: "image",
      // filetype filter (ommit if want all image types)
      fileType,
    })
    .then(({ data }) => {
      response.json(data)
    })
    .catch(err => {
      response.status(400).send(err)
    })
})

module.exports = router