//Frederik Kruusimäe
//09.01.2025
//09

//Erinevad funktsioonid
function nimi(){
    console.log("Frederik");
}

const nimi2 = () => {
    console.log("Frederik");
}
nimi();
nimi2();

//Argumendiga funktsioon
function kuupaevEesti(kp){
    let [p, k, a] = kp.split(".");
    let kuud = ["jaanuar", "veebruar", "marts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    console.log(p + ". " + kuud[parseInt(k) - 1] + " 20" + a);
}
kuupaevEesti("09.01.25");

//Teadmata hulk
function taisarvud(aarvud){
    let taisarvud = aarvud.split(" ").map(Number);
    let summa = taisarvud.reduce((summa, arv) => summa + arv, 0);
    let keskmine = summa / taisarvud.length;
    console.log("Summa: " + summa);
    console.log("Keskmine: " + keskmine);
}
taisarvud("11 22 33");

//Salajane sõnum
const salajaneSonum = (ssonum) => {
    let sonum = ssonum;
    const thaalikud = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let salajane = ssonum.replace(/[aeiouAEIOU]/g, '*');
    console.log(salajane);
}
salajaneSonum("Salajane sonum!");

//Unikaalsed nimed
const leiaUnikaalsedNimed = (nnimed) => {
    let nimed = [...new Set(nnimed)];
    console.log(nimed);
}
leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]);
