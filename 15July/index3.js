class students{
    constructor(roll, name){
        this.name = name;
        this.roll = roll;
    }

// in js if a function is associated to a obj
// and if we are transfering that function then only function get transfered only not the associated object.

// we can manually change the object of normal function.
    show(){
        console.log(this.name);
    }

    // arrow function advantage is if we transfer the arrow function form one place to another it tooks obj with itself not like normal functin .
    // arrow funciton don't need to bind the obj
    // in arrow we can't change the object.

    print = () =>{
        console.log(this.name)
    }

}
var obj = new students(212,"Raj");
// obj.show();

// but id outsider function is passed as argument to another function.
function hello(fun){
    console.log("Hello............");
    fun();
}


// hello(obj.show.bind(obj));



// .....................................................................................
// Not needed in arrow functin.
hello(obj.print)