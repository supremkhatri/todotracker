let typebox = document.querySelector('.searchbox');
let addtodo = document.querySelector('.addtodo');
let output = document.querySelector('.output')
let datepicker = document.querySelector('.date-picker')

let todolists = [];

const render = () => {
    output.innerHTML = ''; // Clear the output before rendering
    todolists.forEach(function (todos, index) {
        let li = document.createElement('li');
        let deletebutton = document.createElement("button");

        li.innerHTML = `
        <span>${index+1}.  </span> <span>${todos.title} </span>
        <span style="color: gray">${todos.dueDate}</span>
      `;
        deletebutton.innerText = "Delete";

        li.appendChild(deletebutton);
        output.appendChild(li);

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.width = "100%";
        li.style.alignItems = "center";
        li.style.paddingRight = "10px";
        li.style.marginBottom = "4px";

        deletebutton.style.width = "30vwpx";
        deletebutton.style.backgroundColor = "red";
        deletebutton.style.border = "none";
        deletebutton.style.color = "white";
        deletebutton.style.borderRadius = "5px";
        deletebutton.style.cursor = "pointer";
        deletebutton.style.padding = "5px";
        deletebutton.style.marginRight = "20px";
        deletebutton.style.marginBottom = "4px";
        deletebutton.style.marginTop = "4px";

        deletebutton.addEventListener("click", function () {
            let index = todolists.indexOf(todos);
            todolists.splice(index, 1);
            localStorage.setItem('todolists', JSON.stringify(todolists));// remove the list item from the DOM
           render(); 
        });
    });
}

let savedTodos = JSON.parse(localStorage.getItem('todolists'));
if (savedTodos !== null) {
    todolists = savedTodos;
    render();
}

addtodo.addEventListener('click', () => {
    let date = datepicker.value;
    let todo = typebox.value;
    todolists.push({
        title: todo,
        dueDate: date,
    });
    localStorage.setItem('todolists', JSON.stringify(todolists));
    render();
})
