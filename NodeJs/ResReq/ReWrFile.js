


	import http from 'http';
	import fs from 'fs';
	import url from 'url';	

	const server = http.createServer((req, res) => {
  		res.writeHeader(200,{'Content-Type':'text/plain'});
	
		let query = url.parse(req.url,true).query;
		console.log(query.id);
		console.log(req.method);
  		let x = (JSON.stringify(query));
	

		if(req.method == "POST"){
			fs.writeFile(query.id, x, function (err) { 
                        	if (err){
        		        	fs.appendFile(query.id, x, function (err) {
                        			if (err){
                                			console.log(err);
                        			}else{
                                			console.log('Append operation complete....');
                        			}
        				});
				}else{
        				console.log('Write operation complete...');
				}
			});
		}
		else if (req.method  == "GET"){
			fs.readFile(query.id, function (err, data) {
                    		if (err){
					console.log(err);
				}else{
    					console.log(data);
					res.write(data);
				}
			});
		}
		else{
			console.log("hi error ....");
		}

		res.end();
	});
	server.listen(3001);
  

