import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './User.js';
import Post from './Post.js';
import Comment from './Comment.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Post' element={<Post />} />
        <Route path='/User' element={<User />} />
        <Route path='/Comment' element={<Comment />} />
      </Routes>
    </Router>
  )
}

export default App;
