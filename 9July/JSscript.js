// var obj = {
//     name : "Raj",
//     age : 22,
//     city : "Indore",
//     mobile : ["99999999999","99999999999","888888888888"], // to store multiple values we can use array but array don't tell as about the property of data stored
//     phone : {
//         self : "88888888",
//         father : "777777777",
//         mom : "6666666666"
//     }
// }

// console.log(obj);
// console.log(typeof(obj));
// console.log(obj.name);
// console.log(typeof(obj.mobile));
//console.log(obj.phone.mom);  // to get nested data



// Array that stores the object 

var student = [
    {
    name : "Raj",
    age : 22,
    city : "Indore",
    mobile : ["99999999999","99999999999","888888888888"], // to store multiple values we can use array but array don't tell as about the property of data stored
    phone : {
        self : "88888888",
        father : "777777777",
        mom : "6666666666"
    }
},
{
    name : "Ra",
    age : 22,
    city : "Indore",
    mobile : ["99999999999","99999999999","888888888888"], // to store multiple values we can use array but array don't tell as about the property of data stored
    phone : {
        self : "88888888",
        father : "777777777",
        mom : "6666666666"
    }
},
{
    name : "R",
    age : 22,
    city : "Indore",
    mobile : ["99999999999","99999999999","888888888888"], // to store multiple values we can use array but array don't tell as about the property of data stored
    phone : {
        self : "88888888",
        father : "777777777",
        mom : "6666666666"
    }
}
]

for(var sh of student){
    console.log(sh.name, sh.phone);
}



// generally data is transfered in the form of string between differnet technology
//   in data communication

