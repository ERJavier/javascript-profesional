const whoisthis = ()=> {
    // 'use strict';
    return this;

}
console.log(`whoisthis(): ${whoisthis()}`);


const person = {
    name: 'Javi',
    saludar: function (params) {
        console.log(`Hola soy ${this.name}`);
    },
};

person.saludar();


const accion = person.saludar;
accion();


const Person = (name) => {
    this.name = name;
    
}

Person.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}
Person();

const angela = new Person("Angela");
angela.saludar();


// functionName.call(). Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
function saludar(){
    console.log(`Hola. es ${this.name} ${this.lastName}`);

}

const richard = {
    name: "Richard",
    lastName: "Lopez",
}

saludar.call(richard);

function caminar (metros,direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}
caminar.call(richard, 400, 'norte');


//functionName.apply(). Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
const valores = [800, 'este']
caminar.apply(richard, valores);

//functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.


const daniel = {name:'daniel', lastName:'cruz'}
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel, 400, 'sur')


