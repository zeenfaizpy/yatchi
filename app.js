const express = require('express')

const app = express()
const port = 8000

app.get('/', (req, res, next) => { next('hello'); });
app.get('/hello', (req, res, next) => { res.send("Hello!"); });

app.listen(port, () => console.log(`App listening on port ${port}`))