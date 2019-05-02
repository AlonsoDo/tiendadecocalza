var express = require('express') ;
var http = require('http');
var app = express();
var server = http.createServer(app);
var mysql = require('mysql');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.static(__dirname + '/public'));
});

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = require("socket.io").listen(server);

// Heroku setting for long polling
io.configure(function () { 
    io.set("transports", ["xhr-polling"]); 
    io.set("polling duration", 10); 
});

io.sockets.on('connection', function (socket) {
  
  socket.emit('news', { hello: 'world' });
  
  socket.on('my other event', function (data) {
    console.log(data);
  });
  
  socket.on('CargarArticulos', function (data) {
    console.log(data);
    var client = mysql.createConnection({
      
      /*user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
      */
      user: 'bb1b110c186bb2',
      password: 'ba1f05df',
      host: 'us-cdbr-iron-east-01.cleardb.net',
      port: '3306',
      
    }); 
    
    //client.query('USE myshop');
    client.query('USE heroku_1951f82b54cf633');
    
    client.query('SELECT * FROM articulos WHERE Grupo='+data.codigogrupo,
      function selectArticulos(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
        } 
        console.log("Number of rows: "+results.length);
        console.log(results);
        console.log(JSON.stringify(results));
        client.end();
        socket.emit('ArticulosBack',JSON.stringify(results));
    });
  });

});