// Obtendo elementos do DOM
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

// Função para adicionar tarefa
function addTask(event) {
    event.preventDefault(); // Impede o envio do formulário e recarga da página

    // Captura os valores do formulário
    const taskTitle = document.getElementById('task-title').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    // Cria o item da lista
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span><strong>${taskTitle}</strong> - ${taskDate}</span>
        <span class="priority">${taskPriority}</span>
    `;

    // Adiciona o item à lista de tarefas
    taskList.appendChild(taskItem);

    // Limpa o formulário após adicionar a tarefa
    form.reset();
}

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', addTask);