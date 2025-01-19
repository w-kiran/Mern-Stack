interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?:string; //optional
};

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false
    }
}

function greet(user: User) {
    console.log("hi there " + user.firstName);
}

isLegal({
    firstName: "harkirat",
    lastName: "singh",
    age: 20,
    email: 'kjhsfkeh@hdjcn.cnfj'
})