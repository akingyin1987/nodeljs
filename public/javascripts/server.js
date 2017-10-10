var   http = require("http")
var   url  = require("url");

function start() {
    function onRequest(request,response) {
        var  pathnae = url.parse(request.url).pathname
        console.log(pathnae)
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(9999);
    console.log("Server has started.");
}
exports.test = start;