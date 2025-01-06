const inputBox = document.querySelector("#inputBox");
const listaContainer = document.querySelector("#todoList");

function btnBox() {
    if(inputBox.value === "") {
        alert("Scrivi un obiettivo!")
    } else {
        // Crea un nuovo elemento di lista
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;      // Aggiungi il testo dell'input

        // Crea il pulsante per cancellare
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Il simbolo "×"
        span.classList.add("delete"); // Aggiungta di una classe per lo stile 
        li.appendChild(span);

        // Aggiungi il "li" alla lista
        listaContainer.appendChild(li);

        // Aggiungi l'evento click al simbolo di eliminazione
        span.addEventListener("click", function() {
            listaContainer.removeChild(li);  // Rimuove l'intero elemento "li"
        });

        // Aggiungi l'evento click per segnare l'attività come completata
        li.addEventListener("click", function() {
            li.style.textDecoration = 'line-through';
            li.style.color = 'red';
        });
    }
    // Pulisci la casella di input dopo aver aggiunto il task
    inputBox.value = "";
        
}

function span () {
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", function(e){
        //span.style.textDecoration = "lineThrough"
        //console.log(span)
        e.target.style.textDecoration = 'line-through'
        e.target.style.color = 'red'
    })
}

function deleteButton() {

    const deleteButton = document.createElement("button");
    
    deleteButton.style.float = "right"
    deleteButton.textContent = "Elimina";
    deleteButton.addEventListener("click", function(){
        todoList.removeChild(li);
    })
}