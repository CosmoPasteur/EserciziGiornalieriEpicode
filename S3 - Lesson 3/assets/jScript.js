const inputBox = document.querySelector("#inputBox");
const listaContainer = document.querySelector("#todoList");

function btnBox() {
    if(inputBox.value === "") {
        alert("Scrivi un obiettivo!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listaContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
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
    
    /*todoList.addEventListener("click", function(e){
       if(e.target.tagName === "li"){
           e.target.classList.toogle(".delete");
       } else if(e.target.tagName === "span"){
           e.target.parentElement.remove();
       }
    }, false)*/
}