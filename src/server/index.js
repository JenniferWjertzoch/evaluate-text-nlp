const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const bodyParser = require("body-parser")
const express = require('express')
// Require the Aylien npm package
var aylien = require("aylien_textapi")


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('dist'))


// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})

// You could call it aylienapi, or anything else
const textApi = new aylien({
    application_id: process.env.API_ID,
   application_key: process.env.API_KEY
})

app.get("/", (req, res) => res.sendFile("index.html"))

app.post("/api", (req, res) => {
    console.log(req.body)
  const { text } = req.body
  console.log("Request to '/api' endpoint", text)
  textApi.sentiment({ text }, (error, result, remaining) => {
    console.log("Aylien Callback", result, remaining)
    res.send(result)
  })
})


function testApi() {
    console.log('Hier teste ich den Request und mache console.log(response)')
    textApi.sentiment({
        'text': 'John is a very good football player!'
      }, function(error, response) {
        if (error === null) {
          console.log(response)
        }
      })

    textApi.classify({
        text: 'My dog farts a lot!'
    }, function(error, response) {
        if (error === null) {
          console.log(response)
        }
    })
}

testApi()
