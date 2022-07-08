
function fullName(firstName: string, lastName: string = "smith"): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('agente');
console.log(richard);