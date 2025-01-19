interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "Kiran",
    lastName: "Pro",
    age: 21
}, {
    firstName: "Neymar",
    lastName: "Jr",
    age: 16
}, ]));