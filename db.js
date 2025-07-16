const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./formdata.db')

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL
  )
`)

module.exports = db
