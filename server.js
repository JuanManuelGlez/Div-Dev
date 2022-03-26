const express= require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'hasuidhqiodjnadcouhanlivunlsauvnsounvauhvudvsnjsdnlviundvkljdnsfovuheovunslkvjndsluvhodafv', 
    resave: false,
    saveUninitialized: false 
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());

const tickets_routes = require('./routes/tickets_routes');
const usuario_routes = require('./routes/usuario_routes');
const tipo_incidencia_routes = require('./routes/tipo_incidencia_routes');

app.use('/tickets', tickets_routes);

app.use('/usuario', usuario_routes);

app.use('/tipo_incidencia', tipo_incidencia_routes);

app.use((request, response, next) => {
    response.status(404);
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Not found</title></head><body><h1 id="principal">404, esta página no existe</h1></body>');
});

app.listen(5000);