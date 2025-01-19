"use strict";
function filteredUsers(users) {
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
    },]));
