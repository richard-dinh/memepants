const router = require('express').Router()

const {google} = require('googleapis')

// https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list
router.get("/google/:q?/:fileType?/:start?", (request, response) => {
  // get query params. Set defaults if nothing passed in
  //q and filetype are optional
  console.log(request.query)
  let q = request.query.q
    ? request.query.q + " spongebob meme"
    : "spongebob memes"
  let fileType = request.query.fileType || ""
  let start = parseInt(request.query.start)
  console.log(`q: ${q}, fileType: ${fileType}, start: ${start}`)
  let customsearch = google.customsearch("v1")

  customsearch.cse
    .list({
        auth: process.env.GOOGLE_API_KEY,
        cx: process.env.CX_ID,
        q,
        searchType: "image",
        //start offset, used to get additional results  
        start: start,
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