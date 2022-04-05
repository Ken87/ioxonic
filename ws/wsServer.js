var io = require('socket.io')();

io.on('connection', function(socket){
    socket.emit('hello','hello',function(data){
        console.log('hello even:' ,data)
    });
    setInterval(function(){
        socket.emit('getTime',new Date());
    },500)

    socket.on('news',function (data) {
        socket.emit('myMessage',data)
    })
});

io.listen(3001);
console.log('ws server is running at : http://localhost:3001' )