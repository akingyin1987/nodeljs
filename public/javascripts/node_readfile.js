var fs = require("fs");

var data = fs.readFileSync('../files/input.txt');

console.log(data.toString());
console.log("程序执行结束!");

fs.readFile('../files/input.txt',function (err,data) {
    if(err){
        return console.error(data)
    }
    console.log(data.toString())
})
console.log("程序执行结束2!");

