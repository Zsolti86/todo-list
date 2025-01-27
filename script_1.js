// Elemek kiválasztása
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Feladat hozzáadása
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Adj meg egy feladatot!');
        return;
    }

    // Új listaelem létrehozása
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Törlés</button>
    `;

    // Törlés gomb eseménykezelője
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });

    // Listaelem hozzáadása a listához
    taskList.appendChild(li);

    // Bemeneti mező ürítése
    taskInput.value = '';
});