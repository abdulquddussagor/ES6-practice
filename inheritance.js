class parent {
    constructor(){
        this.fatherName='khurshed';
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby=new child("arnold");
console.log(baby);
console.log(baby.getFullName());
