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
// Authentication router
const authRouter = require('./auth/auth.js');
app.use('/api/auth', authRouter);





// Test post request
app.post('/api/hello/', (req, res) => {
    // Prints to server
    console.log(req.body.user.email)
    res.send()
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))