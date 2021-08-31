// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// funzione verifica parola palindroma

function paliCheck(string) {
    // espressione regolare che ricerca ogni carattere non alfanumerico(\W) in tutta la stringa(g)
    var rex = /[\W]/g;   
    // rimuovo lettere maiuscole; sostituisco risultato ricerca espressione con spazio vuoto
    var lowString = string.toLowerCase().replace(rex, "");
    // divido in lettere la parola, le inverto e reinserisco nell'array
    var reverse = lowString.split('').reverse().join('');
    if (reverse == lowString) {
        return true;
    }

    return false;
 }



// button verifica
var btnGo = document.getElementById('btn_go');

// evento click su button
btnGo.addEventListener("click",
function() {
        var userInput = document.getElementById("user_input").value;
        console.log(paliCheck (userInput) );
        // richiamo la funzione di verifica e satampo il risultato
        if (paliCheck(userInput) == true) {
            alert('è palindroma!');
        } else {
            alert('non è palindroma.');
        }
        
    }
);
