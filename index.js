const io = require('socket.io')({
   path: '/test',
   serveClient: false,
});

// either
const server = require('http').createServer();

io.attach(server, {
   pingInterval: 10000,
   pingTimeout: 5000,
   cookie: false
});

server.listen(3000);

io.on('connection', socket => {
   // クライアントへデータ送信
   // emit を使うとイベント名を指定できる
   socket.emit('event', { hello: 'world' });
   socket.on('my other event', function (data) {
     // クライアントから受け取ったデータを出力する
      console.log(data);
   });
});