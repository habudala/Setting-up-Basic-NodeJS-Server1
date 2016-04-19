var http = require("http");

function onRequest(request,response) {
	console.log("User made a request" + request.url);
	response.writeHead(200,{"Context-Type":"text/plain"});// 200 success, 404 couldn't find what you looked for etc..
	response.write("defult response mate...");
	response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Node server is running...");