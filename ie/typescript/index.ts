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