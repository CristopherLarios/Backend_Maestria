
const express = require('express');
const path = require('path');// modulo Patch


const methodOverride = require('method-override');
const session = require('express-session');//modulo de manejo de sesiones 



//Inicializaciones
const app = express();
require('./Views/database');



//setings 
app.set ('port',3000);//setamos el puerto de comunicacion
app.set('Views',path.join(__dirname,'Views')); //concatena los directorios View  y el principal 
app.set('view engine', 'ejs');

//midelware
app.use(express.urlencoded({extended:true})); //Permite las capturas de datos sin imagenes (por formularios)

// función middleware para servir archivos estáticos
app.use(express.static(__dirname+'/Views/public'));


app.use(methodOverride('_method'))//habilitamos el delete y put ya que el anterior solo es get y post

//habilitamos uso de manejo de sesiones Con esto permitiremos la autenticación de usuario y almacenamiento de sus datos
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}))



//variables globales 

//Rotes
app.use(require('./routes/index'));
app.use(require('./routes/menu'));
app.use(require('./routes/tesistas'));


//staticFile

//serverActivos

app.listen(app.get('port'),()=>{
    console.log('servidor DACTICFCE: ',app.get('port'));
});

