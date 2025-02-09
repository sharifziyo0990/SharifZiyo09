document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("addTask");
    const taskModal = document.getElementById("taskModal");
    const saveTaskBtn = document.getElementById("saveTaskBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const taskInput = document.getElementById("taskInput");
    const todoTasks = document.getElementById("todo-tasks");
    const progressTasks = document.querySelector(".progress .tasks");
    const doneTasks = document.querySelector(".done .tasks");
    const allTasks = document.querySelector(".delete .tasks");
    const boxes = document.querySelectorAll(".tasks");

    let draggedTask = null;
    let sourceBox = null;

    loadTasks();

    addTaskBtn.addEventListener("click", function () {
        taskModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        taskModal.style.display = "none";
        taskInput.value = "";
    });

    saveTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = createTaskElement(taskText);
        todoTasks.appendChild(taskItem);
        saveTasks();
        taskInput.value = "";
        taskModal.style.display = "none";
    });

    function createTaskElement(text) {
        const taskItem = document.createElement("li");
        taskItem.textContent = text;
        taskItem.classList.add("task");
        taskItem.setAttribute("draggable", "true");
        addDragEvents(taskItem);
        return taskItem;
    }

    function addDragEvents(task) {
        task.addEventListener("dragstart", function () {
            draggedTask = this;
            sourceBox = this.parentElement;
            setTimeout(() => this.classList.add("dragging"), 0);
        });

        task.addEventListener("dragend", function () {
            setTimeout(() => {
                this.classList.remove("dragging");
                draggedTask = null;
                sourceBox = null;
                saveTasks();
            }, 0);
        });
    }

    boxes.forEach(box => {
        box.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box.addEventListener("drop", function () {
            if (draggedTask) {
                if (sourceBox === todoTasks && this === doneTasks) {
                    alert("You have not done");
                    return;
                }

                if (this === allTasks) {
                    setTimeout(() => draggedTask.remove(), 60000);
                }

                this.appendChild(draggedTask);
                saveTasks();
            }
        });
    });

    setInterval(() => {
        allTasks.innerHTML = "";
        saveTasks();
    }, 300000);

    function saveTasks() {
        const tasksData = {
            todo: todoTasks.innerHTML,
            progress: progressTasks.innerHTML,
            done: doneTasks.innerHTML,
            all: allTasks.innerHTML
        };
        localStorage.setItem("tasks", JSON.stringify(tasksData));
    }

    function loadTasks() {
        const tasksData = JSON.parse(localStorage.getItem("tasks"));
        if (tasksData) {
            todoTasks.innerHTML = tasksData.todo;
            progressTasks.innerHTML = tasksData.progress;
            doneTasks.innerHTML = tasksData.done;
            allTasks.innerHTML = tasksData.all;

            document.querySelectorAll(".task").forEach(task => addDragEvents(task));
        }
    }
});
