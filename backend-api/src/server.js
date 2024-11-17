const express = require('express')
require('dotenv').config();
const path = require('path');
const configViewEngine = require('./config/viewEngine.js')
const app = express()
const port =process.env.PORT ;
const hostname = process.env.HOSTNAME
const webRoutes = require('./routes/web.js')

/* **************************************************************** */
//test connecttion 

  //query 

/* config engine  */
configViewEngine(app);
/* Routes   */
app.use('/' ,webRoutes)





app.listen(8080)