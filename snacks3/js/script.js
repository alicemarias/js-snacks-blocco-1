//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente
//il suo nome e comunicagli se può partecipare o no alla festa.
var nomi = ["rosa","bianca","Gerra","alice","Vera","Blue"];

// chiedo all'utente il suo nome
var nomeUtente = prompt('Inserisci il tuo nome');

var messaggio = "non hai accessso, mi spiace";

// controllo che nome sia presente nella lista
for (var i = 0; i < nomi.length; i++){
  console.log(nomi[i]);
  var thisNome = nomi[i];

  if (nomeUtente == thisNome) {
    messaggio = "complimenti, entra pure";
  }
}

// stampo il messaggio all'Utente
console.log(messaggio);


// stesso esercizio trasformando for in while
var i = 0;
while (i < nomi.length) {
  console.log(nomi[i]);
  var thisNome = nomi[i];

  if (nomeUtente == thisNome) {
    messaggio = "complimenti entra pure";
  }

  i++;
}
