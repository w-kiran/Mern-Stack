"use strict";
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi there " + user.firstName);
}
isLegal({
    firstName: "harkirat",
    lastName: "singh",
    age: 20
});
