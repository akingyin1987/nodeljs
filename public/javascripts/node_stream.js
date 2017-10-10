var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('../files/input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;

});

readerStream.on('end',function(){

    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");


//管道流
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('../files/input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('../files/output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");


//链式流
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('../files/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('../files/input.txt.gz'));

console.log("文件压缩完成。");