//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'utente la prima parola
var parolaUno = prompt('scrivi una prima parola');
// chiedo all'utente la seconda parola
var parolaDue = prompt('scrivi una seconda parola');

var messaggio;
// stabilisco quale parola è piu corta
// con parola.length cerco di capire lunghezzza parole poi comparo la lugnhezza
if (parolaUno.length > parolaDue.length) {
  messaggio = parolaDue + '-' + parolaUno;
} else if (parolaDue.length > parolaUno.length) {
  messaggio = parolaUno + '-' + parolaDue;
} else {
  messaggio= "le due parole sono lunghe uguali";
}

//stampo prima parola piu corta poi piu lunga 
alert(messaggio);
