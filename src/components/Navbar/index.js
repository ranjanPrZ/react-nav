import React from 'react';
import {
	Nav,
	NavLink,
	NavMenu
} from './NavbarElements.js';

const Navbar = () => {
	return (
		<div>
			<Nav>
				<NavMenu>
					<NavLink to='/'>User</NavLink>
					<NavLink to='/post' >Post</NavLink>
					<NavLink to='/comment' >Comment</NavLink>
				</NavMenu>
			</Nav>
		</div>
	);
};

export default Navbar;