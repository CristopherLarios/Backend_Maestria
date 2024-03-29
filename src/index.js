
const express = require('express');
const path = require('path');// modulo Patch


const methodOverride = require('method-override');
const session = require('express-session');//modulo de manejo de sesiones 



//Inicializaciones
const app = express();
require('./View/database');



//setings 
app.set ('port',3000);//setamos el puerto de comunicacion
app.set('View',path.join(__dirname,'View')); //concatena los directorios View  y el principal 


//midelware
app.use(express.urlencoded({extended:true})); //Permite las capturas de datos sin imagenes (por formularios)

// función middleware para servir archivos estáticos
app.use(express.static(__dirname+'/View/public'));


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
app.use(require('./routes/productos'));
app.use(require('./routes/menu'));

//staticFile

//serverActivos

app.listen(app.get('port'),()=>{
    console.log('servidor TUCUMAN en el puerto: ',app.get('port'));
});

