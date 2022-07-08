console.log('Hello, TypeScript');

function add (a:number, b:number ){
    return a + b;
}

const sum = add(2, 3)
console.log(sum);

let people: string[] = [];
people = ["yani", "redd", "julian"];
// people.push("88")

let peopleAndNumbers: Array< string | number > = []

peopleAndNumbers.push("manuel");
peopleAndNumbers.push(0);

// Enum

enum Color {
    rojo = "rojo",
    azul = "azul",
    amarillo ="amarillo"
}

let colorFavorito: Color = Color.amarillo;
console.log(` mi color es  ${colorFavorito}`);

//ANY

let comodin: any = "joker"
comodin = {type: 'wildcard'};

//object

let someObject: object =  {type: 'wildcard'};

// Functions

function add2 (a:number, b: number ): number{
    return a + b;
}
const newSum = add2(5,9);


function createAdder(a:number): (number) => number {
    return function(b:number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus = addFour(6)

function fullName(firstName: string, lastName: string = "smith"): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('agente');
console.log(richard);

// interface

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color

}

let rect: Rectangulo = {
    ancho: 6,
    alto: 6,
    color: red

};

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRect = area;
console.log(areaRect)

console.log(rect.toString());


rect.toString = function(){
    return  this.color ? `un rectangulo ${this.color}` : `Un Rectangulo`;
} 

console.log(rect.toString());

