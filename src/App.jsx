// Filename - App.js

import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
	// Counter is a state initialized to 0
	const [counter, setCounter] = useState(0);
	const [name, setName] = useState('');

	// Function is called everytime increment button is clicked
	const updateName = (name) => {
		// Counter state is incremented
		if(name){
      setName('harry singh')
    }else{
      setName('harinder singh')
    }
    setCounter(counter + 1);
	};


	// Function is called everytime decrement button is clicked
	const changeName = (name) => {
		// Counter state is decremented
    if(name){
      setName('harry singh')
    }else{
      setName('harinder singh')
    }
		setCounter(counter + 1);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "300%",
				position: "absolute",
				width: "100%",
				height: "100%",
				top: "-15%",
			}}
		>
			Counter App {name}
			<div
				style={{
					fontSize: "120%",
					position: "relative",
					top: "10vh",
				}}
			>
				{counter}
        <button type="button" onClick={() => changeName('Harry')}> Change</button>
        <button type="button" onClick={() => updateName('Harry')}> Change Name</button>
			</div>
			<div className="buttons">
				<button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginRight: "5px",
						backgroundColor: "green",
						borderRadius: "8%",
						color: "white",
					}}
					onClick={handleClick1}
				>
					Increment
				</button>
				<button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginLeft: "5px",
						backgroundColor: "red",
						borderRadius: "8%",
						color: "white",
					}}
					onClick={handleClick2}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default App;