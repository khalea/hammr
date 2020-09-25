/**
 * Used to load user info onto their dashboard
 * Screen name, created products & servers, etc 
 */


const express = require('express')
const router = express.Router()

const keys = require('../keys.js')

const mongoURI = keys.mongoURI
const MongoClient = require('mongodb').MongoClient

// Actions for /api/user-profile route
router.route('/load').post((req, res) => {

    MongoClient.connect(mongoURI, function (err, client) {
        console.log(`Connected to MongoDB. Email: ${req.body.user.email}`)
        
        if (err) { throw err }

        let db = client.db('hammr-general')

        db.collection('users').find().toArray(function (err, result) {
            if (err) {throw err}

            console.log(result)
            
            // Send response - Array of JSON objects
            res.send(result)
        })
       
    })
})

module.exports = router