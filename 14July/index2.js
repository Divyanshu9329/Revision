const hello = ()=>{
console.log("first")}


// const interval = setInterval(() => {
//     hello();
// }, 2000);
// setTimeout(() => clearInterval(interval),10000);

function harsh(){
    console.log("Name");
}

// module.exports= hello;   // to send one function only


// to send multiple function or modules we use object sending
module.exports = {
    fun1: harsh,
    fun2: hello
};