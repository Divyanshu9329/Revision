const path = require("path");

var s1 = "d:/";
var s2 = "/music/hindi";
var s3 = "abcd.mp3";

const p = path.join(s1,s2,s3);

console.log(p);