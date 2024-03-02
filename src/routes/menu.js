const express = require('express');
const router= express.Router();
const path = require('path');// modulo Patch

const filepatch = path.resolve('Views', 'Menu.html');

const { createReadStream } = require('fs');

const HTML_CONTENT_TYPE = 'text/html'


router.get('/menu',(req,res)=>{
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE });
    //Leemos el fichero about.html
    createReadStream(filepatch).pipe(res);
});

module.exports = router;