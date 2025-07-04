var arr = [33,5,"Raj", true,332.2,4]

// console.log(arr)
// console.log(arr[4])
// console.log("***************")


// console.log("Printing arr")
// for(var i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// console.log("******************")


// without using index indexing
// for(var x of arr){
//     console.log(x)
// }


console.log(arr);
console.log("************")
arr.push(1,3,6,33,33333);
console.log(arr)
console.log("****************")
arr.pop();
console.log(arr);

///////////

// to delete perticular value we use " .splice  "

arr.splice(3, 6);
console.log(arr);

arr.splice(3,0,55,64,23); // using splice we can add some value also
// here   arr.splice(start, end, values to be added);
console.log(arr);

arr.splice(3,6,71,90,99);
console.log(arr);


