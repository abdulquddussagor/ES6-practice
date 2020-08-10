//Function default parameter for not provided values:

function add(num1,num2=2){
    return num1+num2;
}
const result = add(15,20);
console.log(result);
