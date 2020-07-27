const express = require('express')
const app = express()
const bodyParser  = require('body-parser');
const port = 3001

// Run node src/index.js to start

// Parse URLencoded files
app.use(bodyParser.urlencoded({extended: true}))
// Parse JSON body
app.use(bodyParser.json())

app.get('/api/', (req, res) => res.send('API works'))
// app.get('/api/hello/', (req, res) => {res.send('Hello World!')})

app.post('/api/hello/', (req, res) => {
    // Prints to server
    console.log(req.body.user.email)
    res.send()
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))