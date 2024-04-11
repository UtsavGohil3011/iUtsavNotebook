const connectMongo = require('./db');
const express = require('express')

connectMongo();


const app = express()
const port = 3000

//Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/login', (req, res) => {
//   res.send('Hello login!')
// })

// app.get('/signup', (req, res) => {
//   res.send('Hello signup!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
