const express = require('express')
require('dotenv').config();
const path = require('path');
const configViewEngine = require('./config/viewEngine.js')
const app = express()
const port =process.env.PORT ;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web.js')

/* **************************************************************** */
//test connecttion 

  //query 

/* config engine  */
configViewEngine(app);
/* Routes   */
app.use('/' ,webRoutes)

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});