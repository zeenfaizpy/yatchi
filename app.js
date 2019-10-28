const express = require('express')
const path = require('path')
var exphbs  = require('express-handlebars');

const app = express()
const port = 8000

// app.get('/', (req, res, next) => { next('hello'); });
// app.get('/hello', (req, res, next) => { res.send("Hello!"); });

var homeRouter = require('./controllers/home')

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use('/', homeRouter)

app.listen(port, () => console.log(`App listening on port ${port}`))