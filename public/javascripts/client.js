var net = require('net');
var client = net.connect({port: 8080}, function(req,res) {
    console.log(req)
    client.write("Are you  OK");
    console.log('连接到服务器！');
});
client.on('data', function(data) {
    console.log(data.toString());
   // client.end("123444444")
    client.end();
});
client.on('end', function() {
    console.log('断开与服务器的连接');
});