
const form = document.querySelector('form');
const ul = document.getElementById('todoList');
let chore = document.createElement('li');

const saveEm = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < saveEm.length; i++) {
  let chore = document.createElement("li");
  chore.innerText = saveEm[i].task;
  chore.isCompleted = saveEm[i].isCompleted ? true : false;
  if (chore.isCompleted) {
    chore.style.textDecoration = "line-through";
  }
  todoList.appendChild(chore);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let chore = document.createElement('li');
    chore.innerText = document.getElementById("item").value;
    let button = document.createElement('button');
    button.innerText = "Remove";
    chore.isCompleted = false;
    form.reset();    
    ul.appendChild(chore);
    chore.appendChild(button);

    ul.addEventListener('click', function(e){
        const tag = e.target.tagName.toLowerCase();
         if (tag === 'li') {
             e.target.style.textDecoration = 'line-through';
         } else if (tag === 'button') {
             e.target.parentNode.remove();
         }
     })
     saveEm.push({ task: chore.innerText, isCompleted: false });
     localStorage.setItem("todos", JSON.stringify(saveEm));

})



