// Biglietto del treno

/* 
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umanavvero con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca nella documentazione di JS.
 */
/* //chiedere all'utente nome e cognome
//const Name = prompt('type your name and surname');
//stampa in console
console.log(Name);
//inseriamo una valore alla nostra variante e l'assegnamo al documento id Name (vedi Il tuo biglietto nel foglio html)
const NameElement = document.getElementById('Name');
//stampa in console
console.log(NameElement);
//stampa a video nel documento id Name
NameElement.innerHTML = Name; */

/* //chiedere all'utente Km da percorrere
const Kilometri = prompt('type your km');
//stampa in console
console.log(Kilometri);
//inseriamo una valore alla nostra variante e l'assegnamo al documento id Name (vedi Il tuo biglietto nel foglio html)
const KilometriElement = document.getElementById('Kilometri');
//stampa in console
console.log(KilometriElement);
//stampa a video nel documento id Name
KilometriElement.innerHTML = Kilometri; 
 */

/* let userName = 5;
let Kilometri = 8;
console.log(userName + Kilometri); */


//chiedere all'utente il numero di chilometri
//chiedere l'età del passeggero
//calcolare il prezzo totale del viaggio
//stampare a video il risultato


function ticket_generator(){
    let userName = document.getElementById('in_Name').value;
    console.log(userName);
    document.getElementById('pluto').innerHTML = userName;
}





//document.getElementById('fuoco').innerHTML = 'Franco'  //stampa video