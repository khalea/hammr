const express = require('express')
const app = express()
const bodyParser  = require('body-parser');
const port = 3001

// Parse URLencoded files
app.use(bodyParser.urlencoded({extended: true}))
// Parse JSON body
app.use(bodyParser.json())

// Run node src/index.js to start
// Reference https://github.com/khalea/mern-exercise-tracker-mongodb/tree/master/backend



// Routing
const router = express.Router()
app.use('/api', router)

// User Profile Data Router
const userProfiles = require('./user/fetchProfile.js')
app.use('/api/user-profile', userProfiles)


// Test post request
app.get('/api/hello/', (req, res) => {
    // Prints to server
    console.log('Hello!!!')
    res.send({text: 'Reached Hello endpoint'})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))