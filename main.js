const taskForm = document.getElementById('taskForm');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const clearAllBtn = document.getElementById('clearAll');

        // Función para cargar las tareas desde localStorage
        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(task => {
                addTaskToDOM(task);
            });
        }

        // Función para agregar una tarea al DOM y al localStorage
        function addTaskToDOM(taskValue) {
            // Crear un nuevo elemento de lista (li)
            const newTask = document.createElement('li');
            newTask.textContent = taskValue;

            // Crear un botón de eliminar para cada tarea
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(newTask); // Eliminar la tarea de la lista
                removeTaskFromLocalStorage(taskValue); // Eliminar la tarea del localStorage
            });

            // Agregar el botón de eliminar al elemento de lista
            newTask.appendChild(deleteButton);

            // Agregar la nueva tarea a la lista
            taskList.appendChild(newTask);
        }

        // Función para agregar la tarea al localStorage
        function addTaskToLocalStorage(task) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Función para eliminar una tarea específica del localStorage
        function removeTaskFromLocalStorage(taskToDelete) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks = tasks.filter(task => task !== taskToDelete);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Escuchar el evento submit del formulario
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            const taskValue = taskInput.value;

            // Agregar la tarea al DOM y al localStorage
            addTaskToDOM(taskValue);
            addTaskToLocalStorage(taskValue);

            // Limpiar el campo de entrada después de agregar la tarea
            taskInput.value = '';
        });

        // Función para borrar todas las tareas del DOM y localStorage
        clearAllBtn.addEventListener('click', function() {
            taskList.innerHTML = ''; // Borrar todas las tareas del DOM
            localStorage.removeItem('tasks'); // Borrar todas las tareas del localStorage
        });

        // Cargar las tareas guardadas en localStorage al cargar la página
        window.addEventListener('DOMContentLoaded', loadTasks);