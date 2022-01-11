import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './User.js';
import Posts from './Post.js';
import Comments from './Comment.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={<Posts />} />
        <Route path='/Users' component={Users} />
        <Route path='/Comments' component={Comments} />
      </Routes>
    </Router>
  )
}

export default App;
