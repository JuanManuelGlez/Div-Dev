const express= require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


const metricasruta = require('./routes/general.routes');
app.use('/', metricasruta);
app.listen(3000);