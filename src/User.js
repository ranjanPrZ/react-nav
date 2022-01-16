import React, { Component } from "react";
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// export default class User extends Component {
// 	render() {
// 		return <div> asdfsdf</div >;
// 	}
// }
class User extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [], isLoaded: false }
	}

	componentDidMount() {

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
	}

	render() {
		var { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="App">
					<h4>Item List:</h4>
					<ul>
						{items.map(item => (
							<Card style={{ width: '18rem' }}>
								<CardImg variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e39e741db%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e39e741db%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.1328125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
								<CardBody>
									<CardTitle>Card Title</CardTitle>
									<CardText>
										<li key={item.id}>
											<span>Name: {item.name}</span>
											<br></br>
											<span>Email: {item.email}</span>
										</li>
									</CardText>
								</CardBody>
							</Card>
						))}
					</ul>
				</div >
			);
		}
	}
}

export default User;
