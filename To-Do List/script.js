const liContainer = document.getElementById ('li-container')
const inputBox = document.getElementById ('input-box')

function addTask () {
    if (inputBox.value === "") {
        alert("Please write something!");
    }else{
        let li = document.createElement ("LI")
        li.innerHTML = inputBox.value
        liContainer.appendChild(li);
        let span = document.createElement ("span")
        span.innerHTML= "\u00d7";   
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

    liContainer.addEventListener ("click", function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", liContainer.innerHTML);
}

function showData() {
    liContainer.innerHTML = localStorage.getItem("data")
}
showData();