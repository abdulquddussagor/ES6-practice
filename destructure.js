//destructure,object,array,destructure complex object: 
const person = {name:"samrin",age:21,job:"google",bfName:"sagor",bfSalary:50000};
const{age,job}=person;
console.log(age,job);

//old style:
//const age=person.age;
//const job=person.job;

//nested destructure complex object:
const complexObject={
    name:"samrin",
    info:{
        address:"mirpur",
        leader:"tiger leader"
    }
}
const{leader}=complexObject.info;
console.log(leader);

//array:
const friends=["himel","jawad","tasnim","muhit"];
const [first,second,...restFriends]=friends;
console.log(first);
console.log(restFriends);