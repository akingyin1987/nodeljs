var   http = require("http")
var   url  = require("url");

// function start() {
//     function onRequest(request,response) {
//         var  pathnae = url.parse(request.url).pathname
//         console.log(pathnae)
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("Hello World");
//         response.end();
//     }
//     http.createServer(onRequest).listen(9999);
//     console.log("Server has started.");
// }
// exports.test = start;


var net = require('net');
var server = net.createServer(function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });
    connection.on('data',function (agr1) {
        console.log(agr1)
    })
    connection.write('Hello World!\r\n');
   // connection.pipe(connection);
});
server.on('data',function (data) {
    console.log(data)
    server.write("OK")
})
server.listen(8080, function(ag1) {
    console.log(ag1)
    console.log('server is listening');
});