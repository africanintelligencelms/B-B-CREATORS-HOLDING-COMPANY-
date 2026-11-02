import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';

function App() {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </SiteProvider>
  );
}

export default App;