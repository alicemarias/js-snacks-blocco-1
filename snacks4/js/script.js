//Chiedi un numero di 4 cifre all’utente e calcola
//la somma di tutte le cifre che compongono il numero.
var numeroUtente = prompt("dammi un numero di 4 cifre");

//controllo che numero sia di 4 cifre
while (!(numeroUtente >= 1000 && numeroUtente <= 9999)) {
  numeroUtente = prompt("dammi un numero di 4 cifre");
}

// calcolo somma
var numeroUtenteString = numeroUtente.toString();
var numeroUtenteArray = numeroUtenteString.split("");

var somma = 0;
for (var i = 0; i < numeroUtenteArray.length; i++) {
  somma = somma + parseInt(numeroUtenteArray[i]);
}

console.log(somma);
