var ClaseLibro=require('./libros');
var libro=new ClaseLibro();
libro.on('Añadido', function(){
    console.log('Añadido con '+ libro.getPuntos());
});
libro.suma(10);