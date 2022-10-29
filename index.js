const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container")

let addTodo = () => {
    if(input.value !== ""){
        const item = document.createElement("div");
        item.setAttribute("class", "item");
        item.style.display = "flex";
        container.appendChild(item);

        let todo = document.createElement("p");
        todo.setAttribute("class", "item_input");
        todo.innerText = input.value;
        item.appendChild(todo);

        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        editButton.setAttribute("class", "editButton");
        deleteButton.setAttribute("class", "deleteButton");

        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";
        item.appendChild(editButton);
        item.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            item.remove();
        })

        input.value = "";
    }else{
        alert("Enter Your Note");
    }
}

addButton.addEventListener("click", addTodo);