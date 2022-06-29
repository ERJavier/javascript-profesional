const target = {
    red: 'rojo',
    green: 'verde',
    blue: 'azul'
}

const handler = {
    get(obj, prop){
        debugger;
        if(prop in obj){
            return obj[prop]
        }
        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) <= 3 
        }) 

        if (suggestion) {
            console.log(`${prop}, no se encontrø. quisiste decir ${suggestion} ?`);
        }
        return obj[prop];
    }
}
const p = new Proxy(target, handler);
