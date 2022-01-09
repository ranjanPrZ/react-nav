import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './User.js';
import Posts from './Post.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/posts' component={Posts} />
        <Route path='/users' component={Users} />
      </Routes>
    </Router>
  )
}

export default App;
