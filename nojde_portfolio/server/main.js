var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        fs.readdir('../page',function(error,filelist){
            fs.readFile(`./page/main.html`,'utf-8',function(error, description){
                var html = description;
                response.writeHead(200);
                response.end(html);
            });
        });
    }
    else{
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);