import React from "react";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<div className="bg-second">
			<nav className="container py-5">
				<ul className="flex gap-10 justify-between text-lg font-semibold">
					<div className="">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
					</div>
					<div className="flex gap-10">
						<li>
							<NavLink to="https://www.google.com" target="_noblank">
								Blog
							</NavLink>
						</li>
						<li></li>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
