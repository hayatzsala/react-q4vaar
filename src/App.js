import React from 'react';
import './style.css';
import routerDom, { Route, Routes } from 'react-router-dom';
import Posts from './routes/Posts';
import PostInfo from './routes/PostInfo';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/:id" element={<PostInfo />} />
    </Routes>
  );
}
