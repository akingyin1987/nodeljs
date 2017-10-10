
//创建长度为 10 字节的 Buffer 实例：
var buf = new Buffer(10);

//通过给定的数组创建 Buffer 实例：
var buf = new Buffer([10, 20, 30, 40, 50]);

//通过一个字符串来创建 Buffer 实例：
var buf = new Buffer("www.runoob.com", "utf-8");

//string - 写入缓冲区的字符串。
//offset - 缓冲区开始写入的索引值，默认为 0 。
//length - 写入的字节数，默认为 buffer.length
//encoding - 使用的编码。默认为 'utf8' 。
var len =buf.write("123")
console.log(len)

console.log(buf.toJSON())

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


//缓冲区合并
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
var buffer4 = Buffer.concat([buffer1,buffer2],12)
console.log("buffer3 内容: " + buffer3.toString());
console.log("buffer4 内容: " + buffer4.toString());


//缓冲区比较
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}