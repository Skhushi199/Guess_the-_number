let max = prompt("enter the max num");
console.log(max);

const random = Math.floor(Math.random()*max)+1;
console.log(random);

let user = prompt("guess the num");

while(user!=random){
    if(user == "quit"){
        console.log("quiting game");
        break;
    }
    user = prompt("guess the num");
}

console.log("you entered correct num");