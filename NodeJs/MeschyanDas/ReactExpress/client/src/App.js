import {useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
	useEffect(()=>{
		fetch("/data").then((resp)=> resp.json()).then((resp)=>{
			//console.log(resp);
			alert(JSON.stringify(resp,undefined,2));
		});
	},[]);

  	return (
    		<div className="App">
      			<header className="App-header">
        			<img src={logo} className="App-logo" alt="logo" />
	  			<h1>Hello Armenia ...</h1>
     	 		</header>
    		</div>
  	);
}

export default App;
