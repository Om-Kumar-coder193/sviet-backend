const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
app.use(cors())
app.use(express.json())

// API: Submit form data
app.post('/submit', (req, res) => {
  const {name, phone} = req.body
  const query = 'INSERT INTO users (name, phone) VALUES (?, ?)'
  db.run(query, [name, phone], function (err) {
    if (err) return res.status(500).send('Error saving data')
    res.send({id: this.lastID})
  })
})

// API: Get all submissions
app.get('/submissions', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).send('Error fetching data')
    res.json(rows)
  })
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})
