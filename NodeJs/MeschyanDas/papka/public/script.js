



	//console.log("hi ...");
/*	
	fetch("/bye").then((resp)=> resp.json()).then((resp)=> {
		alert(resp.name);
	});

*/
/*
	fetch("/hi", {
		method:"post",
		headers{"content-type":"application/json"},
		body:JSON.stringify({
			name:"Mike"
		})
	});

*/

//..................................................................................... 
	//72
		btn.addeventListener("click",()=>{
			onChange(todo.filer((todo)=>todo.completed ===false));
		});
		
		return container;
	}

	function App(){

		let todos ={
			{label:"Learn JS", completed:false},
			{label:"Learn Node",completed:false},
			{label:"Learn CSS", completed:false}
		};

		const container = document.createElement("div");

		function render(){
			container.innerHTML = "";

			containner.appendChild(TodoForm(function(newtext){
//92

                        todos.push({
                                label:newText,
                                completed:false
                        });
                        render();
                }));

                container.appendChild(list(todos,(newTodos)=>{

                        todos = newTodos;
                        render();
                }));
        }
        render();
        container;
//................................




					label:newtext,
					completed:false
				}));

				render();
			}));
			container.appendchild(List(todos, ()=>{

				
				render();
			}));

			conteiner.appendChild(todoFooter(todos,(newTodos)=>{

				todos = newTodos;
				render();
			}));
		}

		render();

		return container;
	}
	
	root.appendChild(App());

