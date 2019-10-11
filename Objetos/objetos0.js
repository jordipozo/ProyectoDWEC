var star={};

function Star(constelacion,tipo,claseEspectral,magnitud){
    this.constelacion=constelacion;
    this.tipo= tipo;
    this.claseEspectral= claseEspectral;
    this.magnitud=magnitud;
}

star["Polaris"]=new Star ("Ursa Minor","Doble/Cefeida","F7",2.0);
console.log(star.constelacion);