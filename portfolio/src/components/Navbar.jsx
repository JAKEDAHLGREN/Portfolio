import React from "react"

export const Navbar = () => {
	return (
		<nav className="nav">
			<a className="name">Jake Dahlgren Full-Stack Dev</a>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>

				<li>
					<a href="/tech">Technologies</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
