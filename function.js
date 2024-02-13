function hello(){
   console.log("hello"); 
}
hello()
function rollDice(){
let rand=Math.floor(Math.random()*6) +1;
console.log(rand);
}
rollDice();
function printname(name,age){
    console.log(`${name} age is${age}.`);
}
printname("Abhinav",22);
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg)

}
average(3,4,5)