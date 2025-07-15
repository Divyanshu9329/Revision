class student{
    constructor(roll, name){
        this.name = name;
        this.roll = roll;
    }
    show(){
        console.log(this.name);
    }
    print = () =>{
        console.log(this.name);
    }
}

function func(fun){
    console.log("Hello............");
    fun();
}

var obj1 = {roll:231, name:"Raj"};
var obj2 = new student(123,"ram");

const fun = obj2.show.bind(obj1);
fun();

const fun2 = obj2.print.bind(obj1);
fun2();