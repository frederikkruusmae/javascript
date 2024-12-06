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

let broneering = parseFloat(prompt("Sisesta broneeringu arv:"));

    switch (true) {
        case (broneering >= 1 && broneering <= 2):
            console.log("Valige laud kahele inimesele.");
            break;
        case (broneering >= 3 && broneering <= 4):
            console.log("Valige laud neljale inimesele.");
            break;
        case (broneering >= 5 && broneering <= 6):
            console.log("Valige laud kuuele inimesele.");
            break;
        case (broneering > 6):
            console.log("Valige suur laud.");
            break;
        default:
            console.log("Vigane broneeringu arv.");
    }
