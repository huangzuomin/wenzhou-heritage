import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 导入页面组件
import Home from './pages/Home';           // 首页
import Profile from './pages/Profile';     // 郭乐天介绍页
import ExpertLi from './pages/LiProfile';   // 李希光介绍页
import ExpertGuo from './pages/ExpertGuo'; // 郭全中介绍页

function App() {
  return (
    <Router>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<Home />} />

        {/* 郭乐天页面 */}
        <Route path="/leader-profile" element={<Profile />} />

        {/* 李希光页面 */}
        <Route path="/expert-li" element={<ExpertLi />} />

        {/* 郭全中页面 */}
        <Route path="/expert-guo" element={<ExpertGuo />} />
      </Routes>
    </Router>
  );
}

export default App;