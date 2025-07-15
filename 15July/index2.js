// var obj = {
//     roll : 101, name : "Raj",
//     show: function(){
//         console.log(this.name, this.roll);
//     }
// }

// obj.show();  // this will work properly.

var obj = {
    roll : 101, name : "Raj"
}

function show(){
    console.log(this.name, this.roll);
}

// to assign or associate "this" manully assign show () to another object . to assign this key word to  a object.

// this binding -- bind()
// bind return a function through which we this is binded.
const fun = show.bind(obj);
fun();