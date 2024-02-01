let a=Number(prompt("Enter the First number:"));
let b=Number(prompt("Enter the second number:"));
let operator=prompt("Enter the operator you want to perform:")
switch(operator){
    case "*":
        //console.log("The multiplication is:",a*b );
        alert("The multiplication is:"+(a*b));
        break;
    case "+":
        //console.log("The addition is:",a+b);
        alert("The Addition is is:"+(a+b));
            break;
    case "-":
        //console.log("The subtration is:",a-b);
        alert("The subtraction is:"+(a-b));
        break;
    case "/":
        //console.log("The Division is:",a/b);
        alert("The Divisionis:"+(a/b));
        break;
    default:
        console.log("Plz Enter valid operator")

}
