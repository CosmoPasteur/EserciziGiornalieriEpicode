/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1:")

function concatenare (str1, str2) {
  let prima = str1.slice(0, 2);       // Prendi i primi 2 caratteri della prima stringa
  let seconda = str2.slice(-3);     // Prendi gli ultimi 3 caratteri della seconda stringa
  let result = ( prima + seconda ).toUpperCase();   // Concatenazione della stringa due parti e conversione in maiuscolo
  
  console.log(result)     // Risultato in console.
}
concatenare("ciao","amici")
//ALTERNATIVA Prof.: return str1.slice(0,2).concat(str2.slice(-3))
console.log("************************************");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; 
  ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("ESERCIZIO 2:")
function arrNum () {      //funzione
  let array = [];         //array

  for (let i = 0; i < 10; i++) {
    let numRan = Math.floor(Math.random() * 101);  // Numero tra 0 e 100
    array.push(numRan);
  }return array;
}
let risultato = arrNum();
console.log(risultato);

console.log("************************************");
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3:")

function getEvenNumbers(arr) {
  // Filtra l'array per ottenere solo i numeri pari
  let evenNumbers = arr.filter(num => num % 2 === 0);
  
  return evenNumbers;
}

// Esempio di utilizzo
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(getEvenNumbers(numbers));

console.log("************************************");

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4:")

function sumArray(arr) {
  let total = 0;
  
  // Usa forEach per sommare ogni elemento dell'array
  arr.forEach(num => {
    total += num;
  });
  
  return total;
}

// Esempio di utilizzo
let numbers1 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers1));  // Stampa 15
console.log("************************************");

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 5:")

function sumArray(arr) {
  // Usa il metodo reduce per sommare tutti gli elementi dell'array
  let total = arr.reduce((accumulator, num) => accumulator + num, 0);
  
  return total;
}

// Esempio di utilizzo
//let numbers1 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers1));  // Stampa 15
console.log("************************************");

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("ESERCIZIO 6:")

function incrementArray(arr, n) {
  // Usa il metodo map per incrementare ogni valore dell'array di n
  return arr.map(num => num + n);
}

// Esempio di utilizzo
let numbers2 = [1, 2, 3, 4, 5];
let n = 3;
console.log(incrementArray(numbers2, n));  // Stampa [4, 5, 6, 7, 8]
console.log("************************************");
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("ESERCIZIO 7:")

function getStringLengths(arr) {
  // Usa il metodo map per ottenere le lunghezze delle stringhe
  return arr.map(str => str.length);
}

// Esempio di utilizzo
let words = ["EPICODE", "is", "great"];
console.log(getStringLengths(words));  // Stampa [7, 2, 5]

console.log("************************************");
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8:")

function getOddNumbers() {
  let oddNumbers = [];
  
  // Usa un ciclo for per aggiungere i numeri dispari all'array
  for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
  }
  
  return oddNumbers;
}

// Esempio di utilizzo
console.log(getOddNumbers());  // Stampa [1, 3, 5, 7, ..., 99]

console.log("************************************");

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 9:")

function getOldestMovie(movies) {
  // Trova il film con l'anno più vecchio
  return movies.reduce((oldest, current) => {
    return parseInt(current.Year) < parseInt(oldest.Year) ? current : oldest;
  });
}

// Esempio di utilizzo
console.log(getOldestMovie(movies)); 

console.log("************************************");
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 10:")

function getNumberOfMovies(movies) {
  // Restituisce la lunghezza dell'array
  return movies.length;
}

// Esempio di utilizzo
console.log(getNumberOfMovies(movies));  // Stampa il numero di film nell'array

console.log("************************************");

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 11:")

function title(movies) {
   // Usa map per estrarre i titoli dei film
   return movies.map(movie => movie.Title);
}

console.log(title(movies));  // Stampa un array con i titoli dei film
console.log("************************************");

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 12:")

function getMoviesFromCurrentMillennium(movies) {
  // Filtra i film che sono usciti dal 2000 in poi
  return movies.filter(movie => parseInt(movie.Year) >= 2000);
}

// Esempio di utilizzo
console.log(getMoviesFromCurrentMillennium(movies));  // Stampa i film usciti dal 2000 in poi
console.log("************************************");

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 13:")

function sumMovieYears(movies) {
  return movies.reduce((acc, movie) => {
    // Aggiunge l'anno del film all'accumulatore (convertito in numero)
    return acc + parseInt(movie.Year);
  }, 0);
}

// Esempio di utilizzo
console.log(sumMovieYears(movies));  // Stampa la somma di tutti gli anni dei film

console.log("************************************");

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("ESERCIZIO 14:")

function getMovieByImdbID(movies, imdbID) {
  return movies.find(movie => movie.imdbID === imdbID);
}

// Esempio di utilizzo
const movie = getMovieByImdbID(movies, 'tt0120737'); // Ad esempio, 'The Lord of the Rings: The Fellowship of the Ring'
console.log(movie);  // Stampa il film trovato

console.log("************************************");

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("ESERCIZIO 15:")

function getMovieIndexByYear(movies, year) {
  return movies.findIndex(movie => movie.Year === year.toString());
}

// Esempio di utilizzo
const index = getMovieIndexByYear(movies, 2003); // Ad esempio, cerchiamo il primo film uscito nel 2003
console.log(index);  // Stampa l'indice del primo film uscito nel 2003

console.log("************************************");
