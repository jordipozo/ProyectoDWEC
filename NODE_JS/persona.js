module.exports= Persona;

function Persona(nombre){
    this.nombre=nombre;
};

Persona.prototype.hablar=function(){
    console.log('Hola. Me llamo ',this.nombre);
};