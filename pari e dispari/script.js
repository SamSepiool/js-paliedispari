// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// functions

// numero random cpu

function numRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// se somma pari o dispari

function oddOrEven(num){
    
    if (num % 2 == 0){
        return true;
    }

    return false;
}


var oddEven = prompt('scegli tra pari o dispari')
var userNum = parseInt(prompt('scegli un numero da 1 a 5'))
var cpuNum = numRnd(1, 5)



while (isNaN(userNum) || userNum > 5 || userNum == 0){
    alert('devi inserire un numero da 1 a 5')
    userNum = parseInt(prompt('scegli un numero da 1 a 5'))
}

console.log(cpuNum)
console.log(userNum)
var sum = userNum + cpuNum

var result = oddOrEven(sum)

if ( oddEven == "pari" && oddOrEven(sum) ) {
    alert('pari, hai vinto!')
} else if ( oddEven == "dispari" && !oddOrEven(sum)) {
    alert('Dispari. Hai vinto!')
} else {
    alert('Hai perso')
}

