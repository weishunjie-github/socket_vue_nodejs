var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: "http://192.168.0.112:8080",
        methods: ["GET", "POST"],
        credentials: true
    }
});
// 
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("请求了我的服务,并没有连接")
});
app.get('/1', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/my-app', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
    io.emit('msg', '你登录了,有什么想对我说的么?')
    socket.on('disconnect', (res) => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
http.listen(3000, () => {
    console.log('listening on *:3000');
    console.log('Server is running at http://127.0.0.1:3000');
});


