const express = require('express')
const app = express()
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
  res.send('anh minh trai ');
})

app.listen(8080)