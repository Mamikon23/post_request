

	import ht from "http";
	const server = ht.createServer((req,res)=>{
		//res.writeHeader(200, {"content-type":"text/plane"});
		//res.end("Hello Armenia");
	/*	
		res.writeHeader(200,{"content-type":"application/json"});
		res.end(JSON.stringify({
			name: "John"
		}));
	*/
		if (req.url == "/aaa"){
			res.writeHeader(200, {"content-type":"text/plain"});
			res.end("hello ...");
		}else{
			res.writeHeader(200, {"content-type":"text/plain"});
			res.end("bye ...");
		}

	});
	server.listen(3001);


	


	
	
	

			

