let Heroi = "Ercules";
let xpHeroi = 12000;
let rank;

if (xpHeroi < 1000) {
    rank = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    rank = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    rank = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    rank = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    rank = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    rank = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    rank = "Imortal";
} else { 
    rank = "Radiante";
}

console.log("O heroi " + Heroi + " Esta no rank " + rank);