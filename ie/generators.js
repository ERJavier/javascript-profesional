// function* simpleGenerator(){
//     console.log('Start');
//     yield;
//     yield 2;
//     yield 3;
//     console.log('End');
// }

// const gen = simpleGenerator();

// gen.next();
// gen.next();
// gen.next();
// gen.next();


// function* idMaker(){
//     let id = 1;
//     while(true){
//         yield id
//         id = id + 1;
//         console.log(id);
//     }
// }
// const gen2 = idMaker();


// gen2.next();
// gen2.next();
// gen2.next();
// gen2.next();


// function* idMakerReset(){
//     let id = 1;
//     let reset
//     while (true){
//         reset = yield id;
//         if (reset) {
//             id = 1
//         } else {
//             id = id + 1;
//         }
//         console.log(id);

//     }
// }

// const gen = idMakerReset();

// gen.next(true);
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();


// // fibonacci

// function* fibonacci(){
//     let a = 1;
//     let b = 1;
//     while (true){
//         const nextNumber = a + b
//         a = b;
//         b = nextNumber;
//         yield nextNumber;
//         console.log(nextNumber)
//     }
// }

// const gen = fibonacci()

// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();


