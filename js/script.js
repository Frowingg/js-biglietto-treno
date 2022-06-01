//Creo le variabile (costoPerKm / age) / clientKm)
const ticketCostPerKm = 0.21;
const clientAge = parseInt(prompt('Quanti anni hai?'));
const clientKm = parseInt(prompt('Quanti km vuoi percorrere?'));
let userMessage = 'nessuno sconto applicato'
console.log(ticketCostPerKm)
console.log(clientAge)
console.log(clientKm)
console.log(userMessage)

//calcolo il costo del biglietto del cliente
let clientTicketCost = clientKm*0.21
console.log(clientTicketCost)

//in base alle risposte o applico lo sconto del 20% o del 40% o nessuno sconto
 if (clientAge < 18) {
     clientTicketCost = clientTicketCost%100*20
     userMessage = 'abbiamo applicato lo sconto del 20% poichè sei minorenne'
}
console.log(clientTicketCost)
console.log(userMessage)

alert(`il costo del biglietto è di ${clientTicketCost}, $, ${userMessage}`)
// else (clientAge <  64) {
//     clientTicketCost = clientTicketCost%100*40
//     userMessage = 'abbiamo applicato lo sconto del 40% poichè lei ha più di 65 anni'
// }

// alert(userMassege + clientTicketCost)

