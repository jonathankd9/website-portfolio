import React from "react";
import "./App.css";
import Home from "./containers/Home";
import About from "./containers/About";
import {Routes, Route} from "react-router-dom";
import Nav from "./nav/Nav";

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
};

export default App;
