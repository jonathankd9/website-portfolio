import React from "react";
import "./App.css";
import Home from "./containers/Home";
import {Routes, Route} from "react-router-dom";
import Nav from "./nav/Nav";
import FrontendSites from "./containers/FrontendSites";
import Projects from "./containers/Projects"

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/frontend" element={<FrontendSites />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</>
	);
};

export default App;
