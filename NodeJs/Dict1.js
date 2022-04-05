let x = process.argv.slice(2);
console.log(process.argv);

	let Dict =[
		{
		name:"Anna",
		age:25,
		},{
  		name:"Vazgen",
		age:26,
		},{
  		name:"Hayk",
		age:24
	}
	];

	if( x > 23 && x < 26){
		for(let i = 0; i < Dict.length; i++) {
  			if(x >= Dict[i].age){
				console.log(Dict[i].name);
			}else{
				continue;
			}
		
		}
	}
	else{
		console.log("have not ...")
	}
