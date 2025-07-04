document.write("How are you?   <br>");
document.write("<b>How do you do</b><br>");
// we don't use document.write because it selects the whole document i.e, complete screen without serch bar and above tags.

//window.alert("How are you") //and alert("hello") both are same.
let x = 10;
let y = "Raj"
let z = true

document.write("x = ",x," is a ", typeof x, "<br>")
document.write("y = ",y," is a ", typeof y,"<br>")
document.write("z = ",z," is a ", typeof z,"<br>")

document.write("<br><br>")


var a = parseInt(prompt("Enter Your First Num."))
var b = parseInt(prompt("Enter Your second Num."))
var ans = a*b;
document.write(ans,"<br>");
var ans = a+b;
document.write(ans);