"use strict";
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let x1 = isLegal(20);
console.log(x1);
