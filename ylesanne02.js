//Frederik Kruusimäe
//23.10.2024
//ylesanne02

//kellaaeg
const tunnid = 2;
const minutid = 38;
const sekundid = 59;

console.log(tunnid + ":" + minutid + ":" + sekundid);

//tsitaat lause sees
const tsitaat = "Sest ükski inimene, isegi mitte primitiivne neeger, isegi mitte idioot, ei ole nii meeldivalt lihtne, et tema olemust võiks seletada ainult kahe või kolme põhielemendi summana.";

console.log(tsitaat + " " + "autor: Hermann Hesse");

//Mallide kasutamine
let enimi = "Frederik";
let pnimi = "Kruusimäe";

let enimiesimene = enimi[0];
let pnimiesimene = pnimi[0];

console.log("Minu eesnime ja perenime esimesed tähed on: " + enimiesimene + "." + pnimiesimene + ".");

//Perenime pikkus
const nimed = "Kruusimäe, Frederik";
const koma = nimed.indexOf(",");
console.log(koma);
console.log((nimed.substring(0, koma)).toUpperCase());
console.log((nimed.substring(0, koma)).length);

//E-posti aadressi muutmine
const epost = "frederik@netlog.com";
console.log(epost.replaceAll("netlog", "gmail"));

//Andme analüüs
const andmed = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
console.log(andmed.slice(51) + " " + "ja" + " " + andmed.slice(21, 32));
