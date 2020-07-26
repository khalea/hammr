const BodyParser = require('body-parser')

// Register all middleware here

// Can use nodemon to auto-restart server when changes are detected
// Refer to https://katifrantz.com/watch/build-a-scalable-voting-application-with-nodejs-and-reactjs/setting-up-the-backend-server @ 4:30

module.exports = (app) => {
    app.use(BodyParser.json())
}