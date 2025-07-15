console.log("Jai Shree Ram.");
console.log(" ")

class Student{
    constructor(roll,name,age){
        this.roll = roll;
        this.name = name;
        this.age = age;
    }
    show(){
        console.log("\nRoll : ",this.roll);
        console.log("Name : ",this.name, "Age : ", this.age)
    }
    canVote(){
        if(this.age!=undefined){
            if(this.age>=18){
                console.log("** Can Vote **")
            }
            else{
                console.log("** Can't Vote **")
            }
        }
        else{
            console.log("Pls define Age")
        }
    }
}

var obj1 = new Student(121,"Raj",21);
var obj2 = new Student(131,"rj");
var obj3 = new Student(212,"raaa",21);

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

obj1.show();
obj1.canVote();