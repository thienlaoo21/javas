function init() {
    const mainDiv = document.getElementById('main');

    // Create header
    const header = document.createElement('header');
    header.style.height = '100px';
    header.style.backgroundColor = 'lightblue';
    const headerButtons = ['User Rating', 'News', 'Contacts', 'About'];
    headerButtons.forEach(btnText => {
        const btn = document.createElement('button');
        btn.textContent = btnText;
        btn.addEventListener('click', () => {
            document.getElementById('content').textContent = btnText;
        });
        header.appendChild(btn);
    });
    mainDiv.appendChild(header);

    // Create main content
    const mainContent = document.createElement('main');
    mainContent.style.height = '500px';
    mainContent.style.backgroundColor = 'lightgreen';
    mainDiv.appendChild(mainContent);

    // Create content inside main
    const leftPanel = document.createElement('div');
    leftPanel.style.width = '33%';
    leftPanel.style.backgroundColor = 'lightyellow';
    leftPanel.id = 'leftPanel';
    mainContent.appendChild(leftPanel);

    const content = document.createElement('div');
    content.style.width = '33%';
    content.style.backgroundColor = 'lightgrey';
    content.id = 'content';
    mainContent.appendChild(content);

    const rightPanel = document.createElement('div');
    rightPanel.style.width = '33%';
    rightPanel.style.backgroundColor = 'lightpink';
    rightPanel.id = 'rightPanel';
    mainContent.appendChild(rightPanel);

    // Create footer
    const footer = document.createElement('footer');
    footer.style.height = '100px';
    footer.style.backgroundColor = 'lightcoral';
    const currentUsers = document.createElement('div');
    currentUsers.textContent = 'Current users: 0';
    const newUsers = document.createElement('div');
    newUsers.textContent = 'New users:';
    footer.appendChild(currentUsers);
    footer.appendChild(newUsers);
    mainDiv.appendChild(footer);

    // Set up content loader
    const loaderDivs = [leftPanel, content, rightPanel];
    loaderDivs.forEach(div => {
        const loader = document.createElement('div');
        loader.className = 'loader';
        div.appendChild(loader);
    });

    // After 1 second, hide loader and show No users message and Get Users button
    setTimeout(() => {
        loaderDivs.forEach(div => {
            div.querySelector('.loader').style.display = 'none';
        });
        content.textContent = 'No users';
        const getUsersBtn = document.createElement('button');
        getUsersBtn.textContent = 'Get Users';
        getUsersBtn.addEventListener('click', fetchUsers);
        content.appendChild(getUsersBtn);
    }, 1000);

    // Show input and search button after 1 second in left panel
    setTimeout(() => {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        const searchBtn = document.createElement('button');
        searchBtn.textContent = 'Search';
        searchBtn.addEventListener('click', () => {
            const searchText = searchInput.value.toLowerCase();
            const tableRows = document.querySelectorAll('#userTable tbody tr');
            tableRows.forEach(row => {
                const fullName = row.querySelector('.fullname').textContent.toLowerCase();
                if (fullName.includes(searchText)) {
                    row.style.backgroundColor = 'yellow';
                } else {
                    row.style.backgroundColor = '';
                }
            });
        });
        leftPanel.appendChild(searchInput);
        leftPanel.appendChild(searchBtn);
    }, 1000);

    // Show sum of scores in right panel after 1 second
    setTimeout(() => {
        const users = getNewUsers();
        const sum = users.reduce((total, user) => total + user.score, 0);
        const sumDiv = document.createElement('div');
        sumDiv.textContent = `Total score: ${sum}`;
        rightPanel.appendChild(sumDiv);
    }, 1000);

    // Add checkbox to edit table in right panel
    const editCheckbox = document.createElement('input');
    editCheckbox.type = 'checkbox';
    editCheckbox.id = 'editCheckbox';
    editCheckbox.addEventListener('change', () => {
        const table = document.getElementById('userTable');
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            const cell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                row.remove();
            });
            cell.appendChild(deleteBtn);
            if (editCheckbox.checked) {
                row.appendChild(cell);
            } else {
                row.removeChild(cell);
            }
        });
    });
    const label = document.createElement('label');
    label.textContent = 'Edit table';
    label.htmlFor = 'editCheckbox';
    rightPanel.appendChild(label);
    rightPanel.appendChild(editCheckbox);
}

function fetchUsers() {
    const users = [
        { firstname: 'John', lastname: 'Doe', score: 85 },
        { firstname: 'Jane', lastname: 'Smith', score: 92 },
        { firstname: 'Alice', lastname: 'Johnson', score: 78 },
        { firstname: 'Bob', lastname: 'Brown', score: 88 },
        { firstname: 'David', lastname: 'White', score: 75 },
        { firstname: 'Emily', lastname: 'Davis', score: 90 },
        { firstname: 'Michael', lastname: 'Miller', score: 84 },
        { firstname: 'Emma', lastname: 'Wilson', score: 95 },
        { firstname: 'Olivia', lastname: 'Moore', score: 79 },
        { firstname: 'James', lastname: 'Taylor', score: 87 },
        { firstname: 'Sophia', lastname: 'Anderson', score: 93 },
        { firstname: 'William', lastname: 'Thomas', score: 82 },
        { firstname: 'Isabella', lastname: 'Jackson', score: 96 },
        { firstname: 'Daniel', lastname: 'Harris', score: 77 },
        { firstname: 'Benjamin', lastname: 'Martin', score: 89 },
        { firstname: 'Ava', lastname: 'Thompson', score: 94 },
        { firstname: 'Mason', lastname: 'Garcia', score: 80 },
        { firstname: 'Charlotte', lastname: 'Martinez', score: 91 },
        { firstname: 'Ethan', lastname: 'Robinson', score: 86 },
        { firstname: 'Amelia', lastname: 'Clark', score: 83 }
    ];

    setTimeout(() => {
        const table = document.createElement('table');
        table.id = 'userTable';
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');
        const headers = ['First Name', 'Last Name', 'Score'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td class="fullname">${user.firstname} ${user.lastname}</td><td>${user.score}</td>`;
            tbody.appendChild(tr);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        const contentDiv = document.getElementById('content');
        contentDiv.textContent = '';
        contentDiv.appendChild(table);
    }, 1000);
}

function getNewUsers() {
    const users = [
        { firstname: 'John', lastname: 'Doe', score: 85 },
        { firstname: 'Jane', lastname: 'Smith', score: 92 },
        { firstname: 'Alice', lastname: 'Johnson', score: 78 },
        { firstname: 'Bob', lastname: 'Brown', score: 88 },
        { firstname: 'David', lastname: 'White', score: 75 },
        { firstname: 'Emily', lastname: 'Davis', score: 90 },
        { firstname: 'Michael', lastname: 'Miller', score: 84 },
        { firstname: 'Emma', lastname: 'Wilson', score: 95 },
        { firstname: 'Olivia', lastname: 'Moore', score: 79 },
        { firstname: 'James', lastname: 'Taylor', score: 87 },
        { firstname: 'Sophia', lastname: 'Anderson', score: 93 },
        { firstname: 'William', lastname: 'Thomas', score: 82 },
        { firstname: 'Isabella', lastname: 'Jackson', score: 96 },
        { firstname: 'Daniel', lastname: 'Harris', score: 77 },
        { firstname: 'Benjamin', lastname: 'Martin', score: 89 },
        { firstname: 'Ava', lastname: 'Thompson', score: 94 },
        { firstname: 'Mason', lastname: 'Garcia', score: 80 },
        { firstname: 'Charlotte', lastname: 'Martinez', score: 91 },
        { firstname: 'Ethan', lastname: 'Robinson', score: 86 },
        { firstname: 'Amelia', lastname: 'Clark', score: 83 }
    ];
    return users.slice(0, 5);
}

document.addEventListener('DOMContentLoaded', init);
