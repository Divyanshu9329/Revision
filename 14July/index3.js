// const obj = require('./index2')
// obj.fun1();
// obj.fun2();


// object .......................

// JS is a prototype based language .
// js is don't support OOPs , but oops syntex is their is JS
// JS is not object oriented language

// function student(roll , name , age ){
//     this.roll = roll;
//     this.name = name;
//     this.age = age;

//     this.show = function(){
//         console.log(this.roll, this.name, this.age)
//     }
// }


class student {
    constructor(roll , name , age ){
    this.roll = roll;
    this.name = name;
    this.age = age;
    }

    show = function(){
        console.log(this.roll, this.name, this.age)
    }
}


const obj1 = new student(55, "Raj", 22);  // way to make object in JS.
const obj2 = new student(56, "aj", 23);
const obj3 = new student(57, "Rj", 21);
const obj4 = new student(58, "Ra", 20);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

obj1.show();

student.prototype.print = function(){
    console.log("\nRoll : ", this.roll," Name : ", this.name);
}

obj2.print();