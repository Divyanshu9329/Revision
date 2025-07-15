var arr = [2,3,5,1,55,34,54];

Array.prototype.evenList = function(){
    for(let x of this){
        if(x%2==0)
        console.log(x);
    }
}
// arr.evenList();

Array.prototype.uniquePush = function(values){
    if(this.includes(values))
        this.push(values)
}

var arre = [2,4,66,2,44,5];
console.log(arre);
arre.uniquePush(3);
arre.uniquePush(4);

// nonPure function : a function that depends or use any value other then we give it
var x = 10;
function add(y,z){
    console.log(x+y+z);
}

// pure function : a function that depends only on the arguments that we give.
function sub(e,t){
    console.log(e,t);
}

// pure function is used in cache : in cache we store result of pure fuction and if someone called the same function stored in cache, It will not run the complete function it will just use the stored result in cache.
// this will only work on the pure function only.
