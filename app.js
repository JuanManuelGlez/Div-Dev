const express= require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const tickets_routes = require('./routes/tickets_routes');
const user_routes = require('./routes/user_routes');

app.use('/tickets', tickets_routes);

app.use('/user', user_routes);

app.listen(3000);