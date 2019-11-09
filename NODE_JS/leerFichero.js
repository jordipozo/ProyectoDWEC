var fs=require('fs');
fs.readFile('datos.txt', function(err, datos){
    if (err) throw err;
    console.log(datos.toString());
});
