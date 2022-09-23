//Creo le variabile (costoPerKm / age / clientKm)
const clientAge = parseInt(prompt('Quanti anni hai?'));
const clientKm = parseInt(prompt('Quanti km vuoi percorrere?'));
let userMessage; 
console.log(clientAge);
console.log(clientKm);
console.log(userMessage);

//calcolo il costo del biglietto del cliente
let clientTicketCost = clientKm*0.21;
console.log(clientTicketCost);

//in base alle risposte o applico lo sconto del 20% o del 40%
 if (clientAge < 18) {
     clientTicketCost -= (clientTicketCost/100*20).toFixed(2);
     userMessage = `Il costo del biglietto è di ${clientTicketCost} &#8364;, abbiamo applicato lo sconto del 20% poichè sei minorenne.`
} else if (clientAge > 64) {
    clientTicketCost -= (clientTicketCost/100*40).toFixed(2);
    userMessage = `Il costo del biglietto è di ${clientTicketCost} &#8364;, abbiamo applicato lo sconto del 40% poichè lei ha più di 64 anni.`
} else {
    userMessage = `Il costo del biglietto è di ${clientTicketCost} &#8364;`
}
console.log(clientTicketCost);
console.log(userMessage);

//lo scrivo al cliente
document.getElementById('title').innerHTML = userMessage;
