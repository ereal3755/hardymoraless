const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(input.value === ''){
        alert('add a Task!')
    }
    else{
        const newLI = document.createElement('li');
        const checkpoint = document.createElement('i');
        const deleteButton = document.createElement('button');
        checkpoint.classList.add('checkpoint','fa-regular','fa-circle-check');
        deleteButton.classList.add('fa-solid','fa-trash');
        newLI.innerHTML = input.value;
        newLI.appendChild(checkpoint);
        newLI.appendChild(deleteButton);
        listContainer.appendChild(newLI);
        input.value = '';
    }
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === 'I'){
        e.target.classList.toggle('fa-solid');
        e.target.classList.toggle('fa-regular');
        e.target.parentElement.classList.toggle('toggling');
        saveData();
    }
    
},false);

function saveData(){
     localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();