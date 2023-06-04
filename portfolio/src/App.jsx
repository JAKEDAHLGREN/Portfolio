import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			{<Navbar />}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/tech" element={<Tech />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
