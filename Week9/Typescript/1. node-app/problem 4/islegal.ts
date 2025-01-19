// Return true or false based on if a user is 18+
function isLegal(age:number): boolean{
    if (age>18){
        return true;
    }else{
        return false;
    }
}

let x1:boolean= isLegal(20);
console.log(x1);

