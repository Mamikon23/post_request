                


		
		const net = require('net');

                const server = net.createServer((socket) => {
//  stanal
                        socket.write("0");
                        socket.on('data', (chunk) => {
                                const obj = JSON.parse(chunk)
				console.log(obj.bar)
                                socket.end()
			//	return obj;
                        })
			//return obj;
		})	
                server.listen(8080);
		
		/*
		 let x = 1;                       
                 (function start_connection() {
                 	const client = new net.Socket();
                        client.connect(8080,"localhost")
                        
			client.on('data', (buffer) => {
                        	const jsObj = JSON.stringify(obj);
                               	client.write(jsObj)
                        })

                        client.on('end', () => {
                        	if(x) {
                                	start_connection()
                                        x--
                                }
                        })
              	})()
*/
		
