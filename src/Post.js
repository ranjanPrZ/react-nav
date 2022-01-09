import React, { Component } from "react";
import './App.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Post extends Component {

	constructor(props) {
		super(props);
		this.state = { posts: [], isLoaded: false }
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(json => {
				this.setState({
					posts: json, isLoaded: true
				})
			});
	}

	render() {
		var { isLoaded, posts } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="App">
					<h4>Post lists:</h4>
					<ol>
						{posts.map(post => (
							<Card style={{ width: '18rem' }}>
								<CardBody>
									<CardTitle><li key={post.id}>{post.title}</li></CardTitle>
									<CardText><li key={post.id}>{post.body}</li></CardText>
								</CardBody>
							</Card>
						))}
					</ol>

				</div>
			)
		}
	}
}

export default Post;