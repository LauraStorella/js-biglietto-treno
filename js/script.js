// Start Program

// Richiesta Dati Passeggero
var passengerKm = parseInt(prompt('Inserisci il numero di Km da percorrere'));
console.log(passengerKm);
document.getElementById('tratta').innerHTML = 'Il tuo percorso è di ' + passengerKm + ' Km.';

var passengerAge = parseInt(prompt('Inserisci la tua eta'));
console.log(passengerAge);
document.getElementById('eta').innerHTML = 'La tua eta è: ' + passengerAge + ' anni.';

// Costo biglietto intero - Prezzo definito in base ai km (0.21 € al km)
var fullPriceTicket = Math.round( (passengerKm * 0.21) * 100 ) / 100;
console.log(fullPriceTicket);
document.getElementById('prezzo-pieno').innerHTML = 'Il prezzo pieno del biglietto è di € ' + fullPriceTicket;

// Sconto biglietto 20% per under 18
var ticketDiscount20 = Math.round( (fullPriceTicket - (fullPriceTicket * 20 / 100)) * 100 ) / 100;

// Sconto biglietto 40% per over 65
var ticketDiscount40 = Math.round( (fullPriceTicket - (fullPriceTicket * 40 / 100)) * 100 ) / 100;

if (passengerAge < 18) {
  console.log('Il costo del tuo biglietto è di € ' + ticketDiscount20 );
  document.getElementById('sconto20').innerHTML = 'Il costo del tuo biglietto è di € ' + ticketDiscount20;
} else if (passengerAge > 65) {
  console.log('Il costo del tuo biglietto è di € ' + ticketDiscount40);
  document.getElementById('sconto40').innerHTML = 'Il costo del tuo biglietto è di € ' + ticketDiscount40
} else {
  console.log('Il costo del tuo biglietto è di € ' + fullPriceTicket);
  document.getElementById('no-sconto').innerHTML = 'Il costo del tuo biglietto è di € ' + fullPriceTicket
  document.getElementById('sconto20').innerHTML = 'Sconto non applicabile';
  document.getElementById('sconto40').innerHTML = 'Sconto non applicabile';
}

alert('Procedi alla stampa del tuo biglietto e...buon viaggio!');

// End Program
