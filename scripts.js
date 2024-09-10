document.getElementById('new-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const li = document.createElement('li');
    li.innerHTML = `<h3>${taskTitle}</h3>
                    <p>${taskDesc}</p>
                    <p><strong>Deadline:</strong> ${taskDeadline}</p>
                    <button>Volunteer</button>`;
    document.getElementById('tasks').appendChild(li);
    document.getElementById('new-task-form').reset();
});
document.getElementById('tasks').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = '#e0ffe0';
        taskItem.querySelector('button').textContent = 'Volunteered!';
        taskItem.querySelector('button').disabled = true;
    }
});
