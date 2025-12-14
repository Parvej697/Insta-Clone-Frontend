import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Home from './HomePage/Home';
import Post from './PostPage/Post';
import Profile from './ProfilePage/Profile';
import { PostProvider } from './Context/PostContext';   

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
