/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1")

function area (l1, l2){ 
    return l1 * l2;  
}
const reArea = area (10, 5)
console.log("Area del rettangolo:" + reArea)
console.log("*************************************");
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2")
function crazySum (num1=20, num2=5) {
       
    if (num1 === num2 ) {
        return (num1 + num2)  * 3
    } else {
        return  (num1 + num2)
    }
   
}
const reCrazySum = crazySum (20, 5)
console.log(reCrazySum)

console.log("*************************************");

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3")

const crazyDiff = (num) => {
    if(num > 19) {
        return Math.abs (num - 19) *3
    }
    return Math.abs (num - 19);
    
}
const resCrazyDiff = crazyDiff(30);
console.log("La differenza è:" + resCrazyDiff);

console.log("*************************************");
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4")

function boundary (n) {
    if (n >= 20 && n <= 100 || n=== 400 ) {
        return true
    } else {
        return false
    } 
}
const resboundary = boundary(40);
console.log("Il risultato:" + resboundary)

console.log("*************************************");
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5")

const epify = function(str) {
    if(str.startsWith("EPICODE")) {
        return str
    }
    return "EPICODE" + str
}

const resEpify = epify("Test EPICODE");
console.log("Il risultato è:" + resEpify)

console.log("*************************************");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6")

const check3and7 = (n) => {
    if( n > 0 && (n%3 === 0 || n%7 === 0)) {
         return true
    } else {
        return false
    }

}

const resultcheck3and7 = check3and7(14)
console.log("Il risultato della funzione check3and7 è: " + resultcheck3and7)

console.log("*************************************");
//OPPURE:

/* const check3and7 = () => {
    if(n > 0 && (n%3 === 0 || n%7 === 0)) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7")

function reverseString(str) {
    let arrStr = str.split("");
    let strReverse = "";
    for(let i=arrStr.length; i>0; i--) {
        strReverse += arrStr[i-1]
    }   
    return strReverse

}
const resReverseString = reverseString("EPICODE");
console.log("Il risultato:" + resReverseString)

console.log("*************************************");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8")

const upperFirst = function(str) {
    let arrStr = str.split(" ");
    let stringaCompleta = []
    for(let i=0; i<arrStr.legth; i++) {
        let parole = arrStr[i];
        let firstletter = parole.charAt(0).toUpperCase()
        let parolasenzalaprimalettera = parole.slice(1)
        let parolafinale = firstletter +parolasenzalaprimalettera
        stringaCompleta.push(parolafinale)
    }
    
    
    return stringaCompleta.join(' ')

}

const resUpperFirst = upperFirst("da diverse parole")
console.log("Il risultato è:" + resUpperFirst)
console.log("*************************************");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
function cutString(stringa) {
    if (stringa.length > 1 ){
        //Verifica che la stringa abbia almeno due caratteri
        return stringa.slice(1, -1);
    } else {
        //se la stringa ha meno di due caratteri,ritorna una stringa vuota 
        return "";
    }
}
console.log("*************************************");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");
function giveMeRandom(n) {
    let returnArray =[];

    //Genera n numeri casuali e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
    for(let i=0; i < 0; i++) {
        returnArray.push(Math.floor(Math.random() * 11));
    }
    return returnArray;
}
console.log(giveMeRandom(5));
console.log("*************************************");