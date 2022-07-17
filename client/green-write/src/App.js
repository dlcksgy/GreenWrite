import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TestHome from './containers/testHome.js';
import LoginPage from './containers/Auth/LoginPage.js';
import TestHeader from './containers/testHeader.js';
import './App.css';

function App() {
  return (
    <div className="App">
			<BrowserRouter>
      <TestHeader />
        <Routes>
          <Route path="/" element={<TestHome/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
