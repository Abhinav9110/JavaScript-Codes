const max=prompt("Enter the maximum number");
console.log(max);
const random=Math.floor(Math.random()*max) +1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("You ar right!congrates!");
        break;
    }else if(guess< random){
        guess=prompt("Your guess was too small.please try");
    }else{
        guess=prompt("Your guess was too Large.please try");
    }
}