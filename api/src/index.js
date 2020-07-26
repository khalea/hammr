const express = require('express')
const app = express()
const port = 3001

// Run node src/index.js to start

app.get('/api/', (req, res) => res.send('API works'))
app.get('/api/hello/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))