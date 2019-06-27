var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
	
	//обрабатываем отправку: сообщение, имя отправителя
	socket.on('send', function(data) {
		io.sockets.emit('add', {mess: data.mess, name: data.name});
	});

});