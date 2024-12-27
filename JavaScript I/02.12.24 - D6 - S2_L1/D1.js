/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */


/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1")
console.log(`I DataTypes sono dati immessi nelle variabili.
I principali DataTypes in javascript sono le stringhe, i numeri, i dati booleani, null e gli undefined.
Le stringhe possono essere scritte con tre diversi simboli: con doppie virgolette, con virgoletta singola (o apostrofo), con backtick (con strighe più lunghe che vanno a capo).
Il secondo tipo do Dato è il Numero,con questa tipologia di dato in JavaScript possiamo effettuare diverse tipologie di calcoli numerici come l'addizione,la moltiplicazione,la sottrazione e la divisione.
I dati booleani possono essere di due tipi, True o False ( vero o Falso).
Il tipo undefiend rappresenta una variabile vuota, ossia una variabile senza alcun valore.Possiamo controllare il valore di una variabile con il procedimento consol.log.
Inoltre quando si programma a volte si può trovare anche il valore null, esso rappresenta qualcosa di intenzionalmente vuoto.`)
  console.log("************************************************************");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2")
const myName = "Cosimo"
console.log("Il mio nome è"+ " " +myName) 
console.log("************************************************************");


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3")
let a = 12
let b = 20
let c = a + b
console.log("La somma delle due cifre "+12+" e "+20+" è"+" " +c) 
console.log("************************************************************");

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4")
let x = 12

console.log("Il valore della variabile x è "+x+".") 
console.log("************************************************************");


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZO 5")
//myName = "pastore"

console.log("Cannot redeclare block-scoped variable 'myName'.") 
console.log("************************************************************");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6")
let num = 4 
let k = 12
console.log(num - x )
console.log("Il risultato della sottrazione '4' - 'x'(in questo caso k, ma con valore comunque 12) è di -8.") 
console.log("************************************************************");

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZO 7")
let name1 = "jhon"
let name2 = "Jhon"
console.log("la variabile 'name1' e la variabile 'name2' sono uguali:")
console.log(name1===name2)

console.log("Il contenuto della variabile name1 (" + name1.toLowerCase() + ") e il contenuto della variabile name2 (" + name2.toLowerCase() + ") è uguale: " + ( name1.toLowerCase() === name2.toLowerCase()))
console.log("************************************************************");

