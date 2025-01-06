// Variabili globali
const tabellone = document.getElementById('tabellone');
const tabellineContainer = document.getElementById('tabelline-container');
const estraiNumeroBtn = document.getElementById('estraeNumero');
const numeroEstrattoSpan = document.getElementById('numeroEstratto').querySelector('span');
const numTabellineInput = document.getElementById('numTabelline');
const generaTabellineBtn = document.getElementById('generaTabelline');
let numeriEstratti = [];
let tabelline = [];

// Funzione per generare il tabellone
function creaTabellone() {
    const numeri = Array.from({ length: 76 }, (_, i) => i + 1);
    numeriEstratti = [];
    tabellone.innerHTML = ''; // Pulisce il tabellone precedente
    numeri.forEach(numero => {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.dataset.numero = numero;
        cella.textContent = numero;
        tabellone.appendChild(cella);
    });
}

// Funzione per estrarre un numero random
function estraiNumero() {
    if (numeriEstratti.length >= 76) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    let numeroEstratto;
    do {
        numeroEstratto = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.includes(numeroEstratto));

    numeriEstratti.push(numeroEstratto);
    numeroEstrattoSpan.textContent = numeroEstratto;

    evidenziaNumero(numeroEstratto);
}

// Funzione per evidenziare un numero nel tabellone
function evidenziaNumero(numero) {
    const celle = tabellone.querySelectorAll('.cella');
    celle.forEach(cella => {
        if (parseInt(cella.dataset.numero) === numero) {
            cella.classList.add('evidenziata');
        }
    });
    
    // Evidenzia nelle tabelline
    tabelline.forEach(tabellina => {
        const celleTabellina = tabellina.querySelectorAll('.cella');
        celleTabellina.forEach(cella => {
            if (parseInt(cella.textContent) === numero) {
                cella.classList.add('evidenziata');
            }
        });
    });
}

// Funzione per creare una singola tabellina
function creaTabellina() {
    const numeriTabellina = [];
    while (numeriTabellina.length < 24) {
        const numero = Math.floor(Math.random() * 76) + 1;
        if (!numeriTabellina.includes(numero)) {
            numeriTabellina.push(numero);
        }
    }

    const tabellina = document.createElement('div');
    tabellina.classList.add('tabellina');
    numeriTabellina.forEach(numero => {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.textContent = numero;
        tabellina.appendChild(cella);
    });

    tabellineContainer.appendChild(tabellina);
    tabelline.push(tabellina);
}

// Funzione per generare le tabelline
function generaTabelline() {
    const numTabelline = parseInt(numTabellineInput.value);
    if (numTabelline < 1 || numTabelline > 5) {
        alert('Il numero di tabelline deve essere tra 1 e 5.');
        return;
    }

    // Pulisce le tabelline precedenti
    tabellineContainer.innerHTML = '';
    tabelline = [];

    // Crea il numero richiesto di tabelline
    for (let i = 0; i < numTabelline; i++) {
        creaTabellina();
    }

    // Crea il tabellone principale
    creaTabellone();
}

// Event listeners
estraiNumeroBtn.addEventListener('click', estraiNumero);
generaTabellineBtn.addEventListener('click', generaTabelline);

// Inizializza
creaTabellone();