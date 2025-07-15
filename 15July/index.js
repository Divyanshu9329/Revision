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

// obj1.show();
// obj1.canVote();

class Demo {
    fun1(){
        console.log("This is fun1........")
    }
    fun2(){
        console.log("This is fun2........")
    }
    fun3(){
        console.log("This is fun3........")
    }
}

class sample extends Demo     // to use inherite we write "extends" then "class_name"
{
    hello(){
        console.log("Sample class./.....")
    }
    fun2(){
        console.log("This is sample fun2........")
    }
    // fun3(){
    //     console.log("This is demo fun3........")
    // }
    fun3(){
        super.fun3();
        console.log("super sample fun3");
    }
}

var ovj = new sample();

ovj.fun1();  // this is not its own function or this is a inherited function.
ovj.hello(); // this is its own function or self function.
ovj.fun2();   // fun2 is overriding function
ovj.fun3();   // to run the both {form parent class and child class}
