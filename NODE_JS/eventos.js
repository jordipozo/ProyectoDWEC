//usamos el patrón 'observer'

var eventos=require('events');
var eventEmitter=new eventos.EventEmitter();
var suceso=function(){
    console.log('Algo está pasando');
}
eventEmitter
.on('algo-pasa',suceso)
.emit('algo-pasa');