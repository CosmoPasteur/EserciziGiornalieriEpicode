// Celle per il tabellone
/*const tabellone = document.querySelector("cartella")
//console.log(tabellone)
 
function tabellone() {
    for(let i=0; length=>76; i++){
        console.log(i)
    }

}*/
let numeriEstratti = [];
let scheda = [];
let numeriDisponibili = Array.from({ lenght: 76}, (_, i) => i + 1);

//Funzione scheda
function creatScheda() {
    let numeriDisponibili = [...numeriDisponibili];
    let nuovaScheda = [];

    for (let i=0; i<5; i++) {
        let riga = [];
        for(let j=0; j<5; j++) {
            let indice = Math.floor(Math.random() * numeriDisponibili)
            riga.push(numeriDisponibili.splice(indice, 1)[0]);
        }
        nuovaScheda.push(riga);
    }
    return nuovaScheda;
}

//Funzione per creare la visione della scheda
function visualizzaScheda(scheda) {
    const schedaDiv = document.querySelector("scheda");
    schedaDiv.innerHTML = "";

    scheda.forEach(riga => {
        const numeroDiv = createElement("div");
        riga.forEach(numero => {
            const numeroDiv = document.createElement("div");
            numeroDiv.textContent = numero;
            numeroDiv.classList.add("numero");
            rigaDiv.appendChild(numeroDiv);
        })
        schedaDiv.appendChild(rigaDiv);
    });
}

// Funzione per estrarre un numero
function estraiNumero() {
    let numero = Math.floor(Math.random() * 76) + 1;

    // Evita numeri già estratti
    while (numeriEstratti.includes(numero)) {
        numero = Math.floor(Math.random() * 76) + 1;
    }

    numeriEstratti.push(numero);
    return numero;
}

// Funzione per segnare un numero sulla scheda
function segnareNumero(scheda, numero) {
    for (let i = 0; i < scheda.length; i++) {
        for (let j = 0; j < scheda[i].length; j++) {
            if (scheda[i][j] === numero) {
                document.querySelectorAll('.scheda div')[i * 5 + j].classList.add("x");
            }
        }
    }
}

// Funzione per mostrare i numeri estratti
function mostraNumeriEstratti() {
    const numeriDiv = document.getElementById("numeriEstratti");
    numeriDiv.textContent = numeriEstratti.join(', ');
}

// Funzione per gestire l'estrazione del numero
function estrai() {
    const numeroEstratto = estraiNumero();
    segnareNumero(scheda, numeroEstratto);
    mostraNumeriEstratti();
}

// Avvio del gioco
document.querySelector("estraiBtn").addEventListener("click", estrai);

// Creazione e visualizzazione della scheda
scheda = creaScheda();
visualizzaScheda(scheda);