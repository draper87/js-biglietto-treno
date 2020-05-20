// Script che calcola il prezzo del biglietto in base a km percorsi ed età del passeggero

// Creo i prompt per le domande all utente
var numeroKm = parseInt(prompt('Numero di Km percorsi?'));
var eta = parseInt(prompt('Età passeggero?'));
// console.log(numeroKm);
// console.log(eta);

// Verifico i dati inseriti dall utente
if ( isNaN(numeroKm) || isNaN(eta) )  {
  document.getElementById('errore').innerHTML = "Devi inserire numeri interi"
}

// Creo differenti tipologie di prezzo/km in base all Età
var prezzoRegolare = 0.21;
var prezzoUnder18 = prezzoRegolare * 0.8;
// console.log(prezzoUnder18);
var prezzoOver65 = prezzoRegolare * 0.6;

// Creo le variabili per le istruzioni condizionali
var prezzoTotaleViaggio;
var costoBiglietto;

// Creo le istruzioni condizionali
if (eta < 18) {
  prezzoTotaleViaggio = Math.floor((prezzoUnder18 * numeroKm)*10)/10; // arrotondo al primo decimale
  costoBiglietto = 'Il prezzo del biglietto è ' + prezzoTotaleViaggio + ' Euro';
  document.getElementById('biglietto').innerHTML = costoBiglietto;
}
else if (eta >= 65) {
  prezzoTotaleViaggio = Math.floor((prezzoOver65 * numeroKm)*10)/10;
  costoBiglietto = 'Il prezzo del biglietto è ' + prezzoTotaleViaggio + ' Euro';
  document.getElementById('biglietto').innerHTML = costoBiglietto;
}
else {
  prezzoTotaleViaggio = Math.floor((prezzoRegolare * numeroKm)*10)/10;
  costoBiglietto = 'Il prezzo del biglietto è ' + prezzoTotaleViaggio + ' Euro';
  document.getElementById('biglietto').innerHTML = costoBiglietto;
}
