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
 /*
Strumenti.

- console log
- getElementById/querrySelector
- const/let
- if/else
- .classList/.className

*/

// chiedere numero di chilometri da percorrere
// chiedere Nome e Cognome dell'utente
// chiedere l'età del passeggero
// prezzo del biglietto intero 0.21 € al km
// applicare il 20% di sconto per i minorenni
// applicare il 40% di sconto per gli over 65

document.getElementById('generate').addEventListener("click", function() {
    const userName = document.getElementById('user').value;
    console.log(userName);
    const Km = Number(document.getElementById('distance').value);
    console.log(Km);
    const userAge = document.getElementById('age').value;
    console.log(userAge);

    let ticketPrice = Km * 0.21;

    if(userAge === 'Minorenne') {
        ticketPrice = ticketPrice - (ticketPrice * 0.2);
    } else if(userAge === 'Over 65'){
        ticketPrice = ticketPrice - (ticketPrice * 0.4);
    }
    console.log(ticketPrice.toFixed(2) + ' €');

    const passengerElement = document.getElementById('passenger');
    console.log(passengerElement);

    passengerElement.innerHTML = userName;

    const saleElement = document.getElementById('sale');
    console.log(saleElement);

    saleElement.innerHTML = 'Biglietto Standard';

    if(userAge === 'Minorenne') {
        saleElement.innerHTML = 'Biglietto Ridotto del 20%';
    } else if(userAge === 'Over 65'){
        saleElement.innerHTML = 'Biglietto Ridotto del 40%';
    } else if(userAge === 'Maggiorenne') {
        saleElement.innerHTML = 'Biglietto Standard';
    }

    const costsElement = document.getElementById('costs');
    console.log(costsElement);

    costsElement.innerHTML = ticketPrice.toFixed(2) + ' €';
});