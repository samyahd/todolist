const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span"); //delet icon
       span.innerHTML = "\u00d7";
        li.appendChild(span); 


        let editButton = document.createElement("button"); // Ajout du bouton "Modifier"
        editButton.textContent = "Edit"; // Texte du bouton
        editButton.classList.add("edit-button"); // Ajout de la classe pour style
        li.appendChild(editButton); // Ajout du bouton à l'élément li

    }
    inputBox.value = ''; //clear input
    saveDAta();
}
 //click function checked uncheck task and delete task
 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDAta();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDAta();
    }

    else if (e.target.classList.contains("edit-button")) { // Condition pour bouton edit
        let taskText = e.target.parentElement.firstChild.nodeValue.trim();
        let newTaskText = prompt("Edit task :", taskText);
        if (newTaskText !== null) {
            e.target.parentElement.firstChild.nodeValue = newTaskText;
            saveDAta();
        }
    }




    
}, false);

function saveDAta(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();