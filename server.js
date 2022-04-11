const express= require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();

const tickets_routes = require('./routes/tickets_routes');
const usuario_routes = require('./routes/usuario_routes');
const metricasruta = require('./routes/general.routes');
const tipo_incidencia_routes = require('./routes/tipo_incidencia_routes');
const comentario_routes = require('./routes/comentario_routes');
const estado_routes = require('./routes/estado_routes');

const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'hasuidhqiodjnadcouhanlivunlsauvnsounvauhvudvsnjsdnlviundvkljdnsfovuheovunslkvjndsluvhodafv', 
    resave: false,
    saveUninitialized: false 
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/', metricasruta);



//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});

//Idealmente registramos multer después de bodyParser (la siguiente línea ya debería existir)
app.use(bodyParser.urlencoded({ extended: false }));

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('url_archivo_comentario'));    

app.use('/tickets', tickets_routes);

app.use('/usuario', usuario_routes);

app.use('/tipo_incidencia', tipo_incidencia_routes);
app.use('/comentario', comentario_routes);
app.use('/estado', estado_routes);

app.use((request, response, next) => {
    response.status(404);
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Not found</title></head><body><h1 id="principal">404, esta página no existe</h1></body>');
});

app.listen(5000);