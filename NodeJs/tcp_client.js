const net = require('net');
let count = 0;
console.time("main");
(function start_connection() {
	const client = new net.Socket();
    client.connect(5555,"localhost")
    client.on('data', (buffer) => {
        client.write(count.toString())
	})
	client.on('end', () => {
		if(count < 1000) {
			start_connection()
			count++;
		}
		else
			console.timeEnd("main")
	})
})()
