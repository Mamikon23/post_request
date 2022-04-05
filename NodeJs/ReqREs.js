

	import {createServer} from "http";

	const server = createServer((req, res)=>{
		
		let url = req.url.split("?")[0];

		if (url == "/arm"){
			res.writeHeader(200,{"content-type":"text/plain"});
			res.end("Hello Armenia ...");
		}
		else if(req.url == "/"){
                        res.writeHeader(200,{"content-type":"text/plain"});
                        res.end("alo ...");
                }
		else if(req.url === "/rus"){
			res.writeHeader(200,{"Content-Type":"application/json"});
			res.end(JSON.stringify({
				name:"Harut"
			}));
		}
		else{
			res.writeHeader(404, {"content-type":"text/plain"});
			res.end("page not found ...");
		}
	});
	server.listen(3001);
