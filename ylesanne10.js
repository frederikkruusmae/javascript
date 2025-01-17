//Frederik Kruusimäe
//17.01.2025
//10

// Toote objekt
let toode = {
    nimetus: 'piim', hind: 20, kogus: 6000,

    koguhind(){
        return this.hind * this.kogus
    },

    kogusmuuda(kogus){
        this.kogus = kogus
    },
    sisu(){
        return `toode: ${this.nimetus}, hind: ${this.hind}, kogus:${this.kogus}`
    }
}

console.log(toode.nimetus + ', ' + toode.hind + ', ' + toode.kogus)
toode.kogusmuuda(200); console.log(toode.kogus)
console.log(toode.sisu())
console.log()

console.log("---")

// Ostukorv
const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
    ],

    kuva: function() {
        this.tooted.forEach((toode) => {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        });
    },

    lisa: function(nimi, hind, kogus) {
        this.tooted.push({nimi, hind, kogus});
        console.log(`Toode ${nimi} on lisatud ostukorvi.`);
        
    },
    
    summa: function() {
        return this.tooted.reduce((summa, toode) => summa + (toode.hind * toode.kogus), 0).toFixed(2);
    }
};
ostukorv.kuva();
ostukorv.lisa('Salat', 3.70, 2);

console.log('Ostukorvi kogu summa: ', ostukorv.summa());
