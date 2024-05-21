document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        
        taskInput.value = '';
    }
}
