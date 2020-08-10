//class,constructor,create object from class:
class Student {
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="public school";//default value(eta ichha korle dewa jai.mainly use kora hoi jokhon sob object property er same value hoi).
    }
}
const student1=new Student(192047,"sagor");
const student2=new Student(192049,"tasnim");
console.log(student1,student2);
console.log(student1.name);
console.log(student1.id);