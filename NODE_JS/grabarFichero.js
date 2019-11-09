var fs=require('fs');
fs.writeFile('datos.txt','Hola mundo grabando... ', function(err){
    if (err){ throw err;}
    console.log('Se grabó en el fichero');
})