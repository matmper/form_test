const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('node:path')
const routes = require('./routes/routes')

const app = express()
const forms = multer();

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(forms.none());

app.use(routes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`)
})
