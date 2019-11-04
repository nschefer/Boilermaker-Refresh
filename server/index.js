const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//api routes
app.use('/api', require('./api'));

//send index.html
app.get((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.httml'));
});

//session middleware
dbStore.sync();

app.use(session({
  secret: process.env.SESSION_SECRET || 'abc123',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

//500 error
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

//start the server
const port = process.env.PORT || 3000;

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(port, () => {
      console.log(`Sever listening on port ${port}!`)
    });
  })

