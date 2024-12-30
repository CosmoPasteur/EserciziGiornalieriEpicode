const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
console.log("ESERCIZIO 1")

const charactersNames = [""]
console.log(charactersNames)

console.log("*********************************");
/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, 
  e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
console.log("ESERCIZIO 2")

for(let i=0; i < starWarsCharacters.length; i++ ) {
  let obj = starWarsCharacters[i];
  charactersNames.push(obj.name)    //Aggiungi il nome al nuovo array
}

//OPPURE:

/*for(let i=0; i < starWarsCharacters.length; i++ ) {
  let obj = starWarsCharacters[i];
  charactersNames.push ({ name: starWarsCharacters[i].name});
}*/
console.log(charactersNames);   //Stampa l'array con i nomi

console.log("*********************************");

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno 
  tutti gli oggetti femminili.
*/
console.log("ESERCIZIO 3")

femaleCharacters = [""]
for(let i=0; i < starWarsCharacters.length; i++ ) {
  femaleCharacters.push ({gender:starWarsCharacters[i].gender === "female"});
}
console.log(femaleCharacters);
console.log("*********************************");
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
console.log("ESERCIZIO 4")

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  'blue-gray': []
}

console.log (eyeColor)
console.log("*********************************");

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" 
  negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi 
  (al valore della sua proprietà "eye_color").
*/
console.log("ESERCIZIO 5");

for (const element of starWarsCharacters) {
  let obj = element
  let eye_color = eyeColor
  switch (obj.eye_color) {
    case 'blue': eye_color.blue.push(obj);
     break;
    case 'yellow': eye_color.yellow.push(obj);
     break;
    case 'brown': eye_color.brown.push(obj);
     break;
    case 'red': eye_color.red.push(obj);
     break;
    case 'bluegray': eye_color.bluegray.push(obj); 
    break;  
  }
}
console.log(eyeColor);
console.log("*********************************");
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
console.log("ESERCIZIO 6");

let crewMass = 0;
let i = 0;

while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass; // Somma la massa dell'elemento corrente
  i++; // Incrementa l'indice
}

console.log(crewMass); // Stampa la massa totale
console.log("*********************************");

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log("ESERCIZIO 7");

if(crewMass < 500) {console.log("Ship is under loaded");
} else if (crewMass > 500 && crewMass < 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else if (crewMass > 1000) {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
};

console.log("*********************************");

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
console.log("ESERCIZIO 8");

for (let i = 0; i < starWarsCharacters.length; i++) {
  let obj = starWarsCharacters[i];

  if(obj.gender === "n/a" ) {
    obj.gender = "robot"
  }
}
console.log(starWarsCharacters)
console.log("*********************************");
/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/
console.log("ESERCIZIO 9");
console.log("Lunghezza prima:", charactersNames.length); // Stampa la lunghezza prima dell'operazione
// Rimuoviamo i nomi corrispondenti a personaggi femminili da charactersNames
/*for (let i = 0; i < femaleCharacters.length; i++) {
  //const element = femaleCharacters[i];
   charactersNames.filter(name => name !== femaleCharacters[i].name);    // Rimuovi il nome dal array
  } 
  console.log(charactersNames.length)*/

  for (let i = 0; i < femaleCharacters.length; i++) {
    // Rimuoviamo ogni nome di personaggio femminile da charactersNames
    let index = charactersNames.indexOf(femaleCharacters[i].name);
    if (index !== -1) {
      charactersNames.splice(index, 1); // Rimuovi l'elemento all'indice trovato
    }
  }
console.log("Lunghezza dopo:", charactersNames.length); // Stampa la lunghezza dopo l'operazione
console.log("*********************************");

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
console.log("ESERCIZIO 10");
//Funzione per selezionare casualmente un elemento stampando le proprietà
function randomCharacter() {
  //Selezione di un indice casuale
  const randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
  
  // Otteniamo il personaggio casuale
  const character = starWarsCharacters[randomIndex];
}
//Proprietà discorsiva
const description = `${starWarsCharacters.name} è un personaggio con le seguenti caratteristiche:
    - Altezza: ${starWarsCharacters.height} cm.
    - Massa: ${starWarsCharacters.mass} kg.
    - Colore dei capelli: ${starWarsCharacters.hair_color}.
    - Colore della pelle: ${starWarsCharacters.skin_color}.
    - Colore degli occhi: ${starWarsCharacters.eye_color}.
    - Anno di nascita: ${starWarsCharacters.birth_year}.
    - Genere: ${starWarsCharacters.gender}.`;

// Stampiamo la descrizione in console
console.log(description);

// Eseguiamo la funzione per vedere un risultato casuale
randomCharacter();
console.log("*********************************");