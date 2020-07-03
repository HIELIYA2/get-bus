const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const addOfferRoutes = require('./routes/offer-route');
const addOrderRoutes = require('./routes/order-route');
const addUserRoutes = require('./routes/user-route');

const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'));
app.use(
  cors({
    origin: ['http://localhost:8080'],
    credentials: true, // enable set cookie
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'getbus app',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get('/', (req, res) => {
  res.send('you are connected');
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`App listening on port ${port}`));

addOfferRoutes(app);
addOrderRoutes(app);
addUserRoutes(app);
