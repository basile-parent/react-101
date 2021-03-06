import React from 'react';

import './HeaderBar.css';
// import logo from '../../../public/resources/images/logo.png';
import { Toolbar, AppBar } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const HeaderBar = () => {
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				<h1>
					<img src={"/resources/images/logo.png"} alt={"Atecna"} />
				</h1>

				<nav>
					<NavLink to={"/people"}>Collaborateurs</NavLink>
					<NavLink to={"/random"}>Random</NavLink>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;