//Frederik Kruusimäe
//29.11.2024
//06
//POSITIIVNE VÕI NEGATIIVNE
let number = parseFloat(prompt("Sisesta number:"));

// Kontrolli numbrit switch-case abil
switch (true) {
    case (number > 0):
        console.log("Sisestatud number on positiivne.");
        break;
    case (number < 0):
        console.log("Sisestatud number on negatiivne.");
        break;
    case (number === 0):
        console.log("Sisestatud number on null.");
        break;
    default:
        console.log("Palun sisesta kehtiv number.");
}