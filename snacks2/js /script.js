// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;
for(var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("dimmi un numero"));
  somma = somma + numero;
}

// stampo risultato
console.log(somma);
