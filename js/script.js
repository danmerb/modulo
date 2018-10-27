window.onload = init;

function init() {
    let todoList = {

        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;

            var task2 = document.createElement("input");
            task2.setAttribute("type", "submit");
            task2.setAttribute("value", "Done");
            element.appendChild(task2);

            task2.addEventListener('click', function () {
                if (this.click) {
                    element.style.textDecoration = "line-through";
                    element.removeChild(task2);
                }
            });

            var taskEliminar = document.createElement("input");
            taskEliminar.setAttribute("type", "submit");
            taskEliminar.setAttribute("value", "Delete");
            element.appendChild(taskEliminar);

            taskEliminar.addEventListener('click', function () {
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            })

            if (priority) {
                this.listTask.unshift({
                    element,
                    task,
                    task2
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task,
                    task2
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);
    });
}
