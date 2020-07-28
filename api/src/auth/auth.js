/* Create class that sends data to DB
 - performAuth(login || signup, user.json) -> Use status to choose 
   conditional login/signup functions
- Encrypt password with hashing (bcrypt?)
*/

const express = require("express");
const keys = require("../keys.js");
const mongoURI = keys.mongoURI;
const router = express.Router();

// Actions for Signup Route
router.route("/signup").post((req, res) => {
  // MongoDB setup
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  // Connect to DB & Perform Actions
  client.connect((err) => {
    const collection = client.db("hammr-general").collection("users");
    // perform actions on the collection object
    collection.insert({
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email,
      password: req.body.user.password
    }).then(result => {
      console.log('Added new user to DB:')
      console.log(result)
    });
    client.close();
  });
});

// Actions for Login Route
router.route("/login").post((req, res) => {
  console.log("Reached '\\login' route!");
});

module.exports = router;
