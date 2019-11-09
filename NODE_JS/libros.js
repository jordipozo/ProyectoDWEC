var util=require('util');
var events=require('events');
var Class=function(){};
util.inherits(Class,events.EventEmitter); //hacemos heredar el comportamiento del modulo events a la nueva clase creada
Class.prototype.sumaPuntos=0;
Class.prototype.suma=function(puntos){
    sumaPuntos=puntos;
    this.emit('Añadido');
};
Class.prototype.getPuntos=function(){
    return sumaPuntos;
}
module.exports=Class;