

let nivelDeRank = calculoRank(71,30)


function calculoRank (victory, defeat){
    let saldoRanqueada = victory - defeat
    

    switch (true) {
        case saldoRanqueada <= 10:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Ferro.");
            break;
        case saldoRanqueada <= 20:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Bronze.");
            break;
        case saldoRanqueada <= 50:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Prata.");
            break;
        case saldoRanqueada <= 70:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Ouro.");
            break;
        case saldoRanqueada <= 80:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Platina.");
            break;
        case saldoRanqueada <= 90:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Ascendente.");
            break;
        case saldoRanqueada <= 100:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Imortal.");
            break;
        default:
            console.log("O Herói tem saldo de " + saldoRanqueada + " é de nível Radiante.");
    }

    

}

