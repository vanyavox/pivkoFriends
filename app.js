require('@babel/register');
require('dotenv').config();
const express = require('express');
const configApp = require('./config/serverConfig');

const app = express();
const port = process.env.PORT ?? 4000;

configApp(app);

const mainRoute = require('./routes/mainRoute');
const authRoute = require('./routes/authRoute');
const regRoute = require('./routes/regRoute');

app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/reg', regRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
