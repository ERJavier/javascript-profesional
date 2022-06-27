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

const danielCamina = caminar.bind(daniel, 400, 'sur');



//PROTOTYPE


const zelda = {
    name: "Zelda"
}
zelda.saludar = function(){
    console.log(`Hola soy ${this.name}`);
}

zelda.saludar();

const link = {
    name: "Link"
}
link.saludar = function(){
    console.log(`Hola soy ${this.name}`);
}
link.saludar();

// 
// Constructor

const Hero = function Hero(name) {
    const hero = {
        name: name
    }

    hero.saludar = function(){
        console.log(`Hola soy ${this.name}`);

    };
    return hero
}

const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar();


//


const heroMethods = {
saludar: function(){
    console.log(`Hola soy ${this.name}`);
    },
};
function Hero(name) {
    const hero = {
        name: name
    };
    hero.saludar =  heroMethods.saludar;
    return hero;
}
const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar();


// 

const nuevoObjeto = Object.create(objeto);



const heroMethods = {
saludar: function(){
    console.log(`Hola soy ${this.name}`);
    },
};
function Hero(name) {
    const hero = Object.create(heroMethods);
    hero.name = name;
    return hero;
}
const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar();


// new 



// const heroMethods = {
// saludar: function(){
//     console.log(`Hola soy ${this.name}`);
//     },
// };


function Hero(name) {
    //const hero = Object.create(Hero.prototype);
    this.name = name;
    //return hero;
}

Hero.prototype.saludar = function() {
    console.log(`soy superheroe! ${this.name}`);
} ;

const zelda = new Hero("Zelda");
zelda.saludar();

const link = new Hero("Link");
link.saludar();

console.log("name:",zelda.name );

//hasOwnProperty

console.log('zelda.hasOwnProperty("name"):',zelda.hasOwnProperty("name") );



const protp = Object.getPrototypeOf('zelda');
console.log(protp);

const calc = (){
    if 
}