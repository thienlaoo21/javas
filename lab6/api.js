function fetchUsers() {
    return new Promise((resolve, reject) => {
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
            const randomUsers = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * users.length);
                randomUsers.push(users[randomIndex]);
            }
            resolve(randomUsers);
        }, 1000);
    });
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
