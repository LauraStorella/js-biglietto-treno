// Start Program

// Richiesta Dati Passeggero
var passengerKm = parseInt(prompt('Inserisci il numero di Km da percorrere'));
console.log(passengerKm);

var passengerAge = parseInt(prompt('Inserisci la tua eta'));
console.log(passengerAge);

// Costo biglietto intero - Prezzo definito in base ai km (0.21 € al km)
var fullPriceTicket = passengerKm * 0.21;
console.log(fullPriceTicket);

// Sconto biglietto 20% per under 18
var ticketDiscount20 = fullPriceTicket - (fullPriceTicket * 20 / 100);

// Sconto biglietto 40% per over 65
var ticketDiscount40 = fullPriceTicket - (fullPriceTicket * 40 / 100);

if (passengerAge < 18) {
  console.log('Il costo del tuo biglietto è di € ' + ticketDiscount20 );
} else if (passengerAge > 65) {
  console.log('Il costo del tuo biglietto è di € ' + ticketDiscount40);
} else {
  console.log('Il costo del tuo biglietto è di € ' + fullPriceTicket);
}

// End Program
