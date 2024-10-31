//Frederik Kruusimäe
//23.10.2024
//03

//Sõiduaeg ja kaugus
const kilomeetrid = 90;
const kiirus = 90;

let result = kilomeetrid / kiirus;
console.log("Sõit kestis: " + result + "h");

//Postitusete kuvamine
const postitused = 137;
const postitusilehel = 10;

let vastus = Math.ceil (postitused / postitusilehel);
let jaak = postitused % postitusilehel;

console.log("Lehekülgi kokku on: " + vastus);
console.log("Viimasel lehel on " + jaak + " postitust");

//Serveri töökulu
const voimsus = 400
const hind = 9.69

const tarbimine = voimsus / 100
const kulu = tarbimine * hind

console.log("tookulu on: " + kulu + " eurot tunnis")
