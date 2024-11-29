//Frederik Kruusimäe
//29.11.2024
//05

//TEMPERATUUR
let temperatuur = 17;{
    if (temperatuur > 25) {
        console.log("Väga kuum ilm!");
    }
    if (temperatuur >= 15 && temperatuur <= 25) {
        console.log("Mõnus temperatuur");
    }
    if (temperatuur < 15) {
        console.log("Jahe ilm");
    }
};

//KASUTAJANIME KONTROLL
let kasutajanimi = prompt("Sisesta oma kasutajanimi:");
kasutajanimi === "admin" ? console.log("Tere, administraator!") : console.log("Tere, külaline!");

//ÜRITUSE PILETITE HIND
let piletitüüp = prompt("Sisesta piletitüüp (täispilet / sooduspilet):").toLowerCase();
let vanus = parseInt(prompt("Sisesta oma vanus:"));

let hind;

if (piletitüüp === "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20;
    } else {
        hind = 15; 
    }
} else if (piletitüüp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8; 
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 15; 
    }
} else {
    console.log("Vale piletitüüp. Palun sisesta 'täispilet' või 'sooduspilet'.");
}

if (hind !== undefined) {
    console.log("Pileti hind on: " + hind + " eurot.");
}