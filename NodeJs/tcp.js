const net = require('net');

const server = net.createServer((socket) => {
    socket.write("0");
    socket.on('data', (chunk) => {
        console.log(chunk.toString())
        socket.end()
    })
})

server.listen(5555, () => {
  console.log("TCP server started listening at", 5555)
})
