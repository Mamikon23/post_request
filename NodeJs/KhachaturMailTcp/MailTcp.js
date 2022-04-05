	
	
	
		const net = require('net');
           	const prompt = require('prompt');
// drsic vercnel
		prompt.start();
		prompt.get(['bar'], function (err, result) {
 	 		if (err) {
    				return onErr(err);
  			}
			else{
				function myFunc(require) {
					//console.time("jam");
                			
					let x = 1;					
	// uxarkel				
					(function start_connection() {
                        			const client = new net.Socket();
                        			client.connect(8080,"localhost")
                        
						client.on('data', (buffer) => {
							const obj = JSON.stringify(result);
                                			client.write(obj) // .toString()
						})
                        
						client.on('end', () => {
                        	        		if(x) {
                                	        		start_connection()
								x--
                            		    		}
                        			})
                			})()
				}setTimeout(myFunc, 4500, 'funky');
			}
		})
// stanal
		const server = net.createServer((socket) => {
			socket.write("0");
    			socket.on('data', (chunk) => {
        			console.log(chunk.toString())
        			socket.end()
    			})
		})
		server.listen(8000);












