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