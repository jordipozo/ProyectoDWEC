//clases con JS y Node

var Persona = require('./persona');  //"importamos" el módulo persona.js, mediante 'require'
var jordi=new Persona('Jordi');
jordi.hablar();