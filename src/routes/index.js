const express = require('express');
const router = express.Router();
const path = require('path');// modulo Patch

const app = express();

const filepatch = path.resolve('View', 'index.html');

const { createReadStream } = require('fs');

const HTML_CONTENT_TYPE = 'text/html'




router.get('/', (req, res) => {
    // res.send('Index - Aqui va mi pagina de inicio');
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE });
    //Leemos el fichero about.html
    createReadStream(filepatch).pipe(res);
});



module.exports = router;