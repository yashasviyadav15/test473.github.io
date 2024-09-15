import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import JobApplyPage from './components/JobApplyPage';
import SerialNumberPage from './components/SerialNumberPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/job-apply" element={<JobApplyPage />} />
      <Route path="/serial-number" element={<SerialNumberPage />} />
    </Routes>
  );
};

export default App;
