
import React from 'react';
import UsersList from './components/userslist';
import {  Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <div>
    <Routes>
     
        <Route exact path="/" element={<UsersList />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Profile/:id" element={<Profile />} />
     
    </Routes>
    </div>
  );
}

export default App;