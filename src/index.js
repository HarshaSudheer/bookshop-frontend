import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook"
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/add" element={<AddBook/>} />
    <Route path="/edit" element={<EditBook/>} />
  </Routes>
</Router>
,
  document.getElementById('root')
);
