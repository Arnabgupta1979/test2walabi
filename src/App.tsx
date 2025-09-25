import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/academy/:courseId" element={<CourseDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;