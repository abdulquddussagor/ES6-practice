//Arrow function , multiple parameter , function body:

//normal procedure:
/*function double(num){
    return num*2;
}
const double1 = function myFun(num){
    return num*2;
}
const result=double(5);
console.log(result);*/


//es6 (Arrow function):
const double = num =>num*2;
const add = (x,y) =>x+y;
const give5 = () =>5;
const doMath = (x,y) =>{
    const sum=x+y;
    const diff=x-y;
    const multiple=sum*diff;
    return multiple;
}
const result=double(5);
const result1=add(5,7);
const result2=give5();
const result3=doMath(7,5);
console.log(result);
console.log(result1); 
console.log(result2); 
console.log(result3);  