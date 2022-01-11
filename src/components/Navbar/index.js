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
					<NavLink to='/' activeStyle>User</NavLink>
					<NavLink to='/posts' activeStyle>Post</NavLink>
					<NavLink to='/comments' activeStyle>Comment</NavLink>
				</NavMenu>
			</Nav>
		</div>
	);
};

export default Navbar;