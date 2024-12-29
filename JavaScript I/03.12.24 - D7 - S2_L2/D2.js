/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
let a = 15;
let b = 10;
if(a > b) {
  console.log("tra i due valori la variabile "+ a +" rappresenta il numero più grande")
} else if(a < b) {
  console.log("Il valore a" +a+ " è più piccolo di b "+b+"")
} else {
  console.log("il valore a e il valore b sono uguali")
}
console.log("*****************************************************************************");


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
const num = 6;
if(num !== 5) {
  console.log("not equal");
}  else if(num == 5) {
  console.log("number is equal to 5");
}

// OPPURE: 

/*console.log("oppure")
let numb = 5;
if(numb > 5 || numb < 5) {
  console.log( numb + " not equal ")
};*/
console.log("*****************************************************************************");


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
  // Numero da verificare
let numbe = 100;
if(numbe % 5 === 0) {
  console.log(+numbe+ " è Divisibile per 5")
};
console.log("*****************************************************************************");
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
// Valore di t
let t = 5;
// valore di y
let y = 3;
//SOLUZIONE 1
// somma dei due numeri
let z = t + y;
console.log(z = t + y);
console.log( " Secondo l'algoritmo svolto addizionando il valore t ("+ t +") con il valore y ("+ y +") il valore ottenuto è pari a 8.")

console.log("oppure")
//SOLUZIONE 2:

if(t === 8 || y === 8 || t + y === 8 || t - y === 8) {
  console.log("L'algoritmo è verificato" )
}
console.log("*****************************************************************************");
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
const totalShoppingCart = 49.99;
let costoSpedizione = 10;
let total;
if(totalShoppingCart > 50) {
  total = totalShoppingCart;
} else if(totalShoppingCart < 50) {
  total = totalShoppingCart + costoSpedizione
} 
console.log(total)

  //oppure
console.log("oppure")

  let cart = 80
  let costspedizione = 10
  let totalShoppingCart0;
  if(cart > 50) {
    totalShoppingCart0 = cart
  } else{
    totalShoppingCart0 = cart + costoSpedizione
  }
  console.log(totalShoppingCart0)
  console.log("*****************************************************************************");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
const totalShoppingCart1 = 60;
let costoSpedizione1 = 10;
let scontoBlackFriday = 0.8
if(totalShoppingCart1 > 50) {
   console.log(totalShoppingCart1 * scontoBlackFriday)
} else if(totalShoppingCart1 <= 50) {
  totalShoppingCart1 + costoSpedizione * scontoBlackFriday
}
  console.log("*****************************************************************************");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");

let num1 = 30;
let num2 = 20;
let num3 = 40;
if(num1 >= num2) {
  if(num3 >= num1) {
    console.log(num3, num1, num2)
  } else {
    if(num3 >= num2) {
      console.log(num1, num3, num2)
    }
  }
}

console.log("*****************************************************************************");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
const myWill = 10
console.log(myWill, typeof myWill)
console.log("Il valore qui presente è stato identificato come valore numerico tramite 'typeof'")
console.log("*****************************************************************************");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
// Numero da verificare
var numero = 15;

// Utilizzo dell'operatore modulo per determinare la parità
if (numero % 2 === 0) {
  console.log(numero + " è un numero pari.");
} else {
  console.log(numero + " è un numero dispari.");
}
console.log("*****************************************************************************");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 10")
let val = 7
if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  console.log("*****************************************************************************");


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
  */

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 11")

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto";

console.log(me);
console.log("*****************************************************************************");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 12")

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
delete me1.lastName;
console.log(me1);
console.log("*****************************************************************************");
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 13")

const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me2.skills.pop(2);
console.log(me2);
console.log("*****************************************************************************");
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 14")

console.log("*****************************************************************************");

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

