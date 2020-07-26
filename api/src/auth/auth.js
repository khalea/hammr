import Express from 'express'
const setupMiddleware = require('./setup/middleware.js')

const app = Express()

setupMiddleware(app)

app.listen(4000, () => {console.log('Server started on port 4000')})