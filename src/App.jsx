import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';       // 对应温州商脉专题页
import Profile from './pages/Profile'; // 对应项目负责人介绍页

function App() {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />

        {/* 负责人介绍页路由 */}
        <Route path="/leader-profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
