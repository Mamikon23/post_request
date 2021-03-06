
	

	import http from 'http';
	import net from 'net';
	import { URL } from 'url';

	// Create an HTTP tunneling proxy
	const proxy = http.createServer((req, res) => {
  		res.writeHead(200, { 'Content-Type': 'text/plain' });
  		res.end('okay');
	});

	proxy.on('connect', (req, clientSocket, head) => {
  		// Connect to an origin server
  		const { port, hostname } = new URL(`http://${req.url}`);
  		const serverSocket = net.connect(port || 80, hostname, () => {
    			clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    	'Proxy-agent: Node.js-Proxy\r\n' + '\r\n');
    			serverSocket.write(head);
    			serverSocket.pipe(clientSocket);
    			clientSocket.pipe(serverSocket);
  		});
	});

	// Now that proxy is running
	proxy.listen(3001,3001,3001,'127.0.0.1', () => {

  		// Make a request to a tunneling proxy
  		const options = {
    			port: 3001,
    			host: '127.0.0.1',
  		};

  		const req = http.request(options);
  		req.end();

  		req.on('connect', (res, socket, head) => {
    			console.log('got connected!');

    			// Make a request over an HTTP tunnel
    			socket.write('GET / HTTP/1.1\r\n' +
                 	'Host: www.google.com:80\r\n' +
                 	'Connection: close\r\n' +
                 	'\r\n');
    			socket.on('data', (chunk) => {
      				console.log(chunk.toString());
    			});
    			socket.on('end', () => {
      				proxy.close();
    			});
  		});
	});







